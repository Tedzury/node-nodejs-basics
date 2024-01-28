import { createHash } from 'crypto';
import getRootDir from '../shared/lib/utils.js'
import { join } from 'path';
import { stdout } from 'process';
import { createReadStream, createWriteStream } from 'fs';
import { Transform, Writable } from 'stream';
import { pipeline } from 'stream/promises'
 
const rootDir = getRootDir(import.meta.url);
const filePath = join(rootDir, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const readable = createReadStream(filePath, 'utf-8');
    const transform = new Transform({
        transform(chunk, _, cb) {
            const output = createHash('sha256').update(chunk).digest('hex');
            cb(null, output);
        }
    })
    const writable = new Writable({
        write(chunk, enc, cb) {
            stdout.write(chunk)
            cb()
        }
    })

    pipeline(
        readable,
        transform,
        writable,
    )
};

await calculateHash();