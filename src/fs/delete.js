import { rm } from 'node:fs/promises';
import { join } from 'path';
import getRootDir from '../shared/lib/utils.js';

const rootDir = getRootDir(import.meta.url);

const srcFileName = join(rootDir, 'files', 'fileToRemove.txt');
const errText = 'FS operation failed';

const remove = async () => {
    try {
        await rm(srcFileName)
    } catch {
        throw new Error(errText);
    }
};

await remove();