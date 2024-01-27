import { writeFile } from 'node:fs/promises';
import { join } from 'path';
import getRootDir from '../shared/lib/utils.js';

const rootDir = getRootDir(import.meta.url);

const filePath = join(rootDir, 'files', 'fresh.txt');
const fileContent = 'I am fresh and young';
const errText = 'FS operation failed';

const create = async () => {
    try {
        await writeFile(filePath, fileContent, { flag: 'wx'});
    } catch {
        throw new Error(errText)
    }
}

await create();