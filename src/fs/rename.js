import { rename as myRename, access } from 'node:fs/promises';
import { join } from 'path';
import getRootDir from '../shared/lib/utils.js';

const rootDir = getRootDir(import.meta.url);

const srcFile = join(rootDir, 'files', 'wrongFilename.txt');
const destFile = join(rootDir, 'files', 'properFilename.md');
const existsErrText = 'Already exists';
const errText = 'FS operation failed';

const rename = async () => {
    try {
        await access(destFile);
        throw new Error(existsErrText); 
    } catch(err) {
        if (err.message === existsErrText) throw new Error(errText);    
        try {
            await myRename(srcFile, destFile);
        } catch {
            throw new Error(errText);
        }
    }
};

await rename();