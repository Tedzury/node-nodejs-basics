import { createWriteStream } from 'fs';
import { join } from 'path';
import getRootDir from '../shared/lib/utils.js';
import { stdin } from 'process';

const rootDir = getRootDir(import.meta.url);

const filePath = join(rootDir, 'files', 'fileToWrite.txt');

const write = async () => {
    const writeStream = createWriteStream(filePath);
    stdin.pipe(writeStream);
};

await write();