import { readFile } from 'node:fs/promises'
import { join } from 'path';
import getRootDir from '../shared/lib/utils.js';

const rootDir = getRootDir(import.meta.url);

const srcFile = join(rootDir, 'files', 'fileToRead.txt');
const errText = 'FS operation failed';

const read = async () => {
    try {
        const content = await readFile(srcFile, { encoding: 'utf-8'});
        console.log(content);
    } catch {
        throw new Error(errText);
    }
};

await read();