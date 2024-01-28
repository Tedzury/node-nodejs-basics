import { cp } from 'node:fs/promises';
import { join } from 'path';
import getRootDir from '../shared/lib/utils.js';

const rootDir = getRootDir(import.meta.url);

const srcDirPath = join(rootDir, 'files');
const destDirPath = join(rootDir, 'files_copy');
const errText = 'FS operation failed';

const copy = async () => {
    try {   
       await cp(srcDirPath, destDirPath, { recursive: true, force: false, errorOnExist: true })
    } catch {
        throw new Error(errText)
    }
};

await copy();
