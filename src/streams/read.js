import { createReadStream } from 'fs';
import { join } from 'path';
import getRootDir from '../shared/lib/utils.js'
import { stdout } from 'process';

const rootDir = getRootDir(import.meta.url);

const filePath = join(rootDir, 'files', 'fileToRead.txt');

const read = async () => {
    const readStream = createReadStream(filePath);
    readStream.pipe(stdout)
};

await read();