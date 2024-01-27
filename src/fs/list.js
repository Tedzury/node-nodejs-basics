import { readdir } from 'node:fs/promises'
import { join } from 'path';
import getRootDir from '../shared/lib/utils.js';

const rootDir = getRootDir(import.meta.url);
const folderPath = join(rootDir, 'files');
const errText = 'FS operation failed';

const list = async () => {
    try {
        const list = await readdir(folderPath);
        list.forEach((item) => console.log(item));
    } catch {
        throw new Error(errText);
    } 
};

await list();