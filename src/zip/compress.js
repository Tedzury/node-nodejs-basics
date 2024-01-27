import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { join } from 'path';
import getRootDir from '../shared/lib/utils.js';
import { createGzip } from 'zlib';

const rootDir = getRootDir(import.meta.url);

const srcFile = join(rootDir, 'files', 'fileToCompress.txt');
const destFile = join(rootDir, 'files', 'archive.gz');

const compress = async () => {
    const readable = createReadStream(srcFile);
    const zipper = createGzip();
    const writable = createWriteStream(destFile);
    pipeline(
        readable,
        zipper, 
        writable,
        err => {
            console.log(err);
        }
    );
};

await compress();