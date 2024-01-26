import { access, rm } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcFileName = `${__dirname}/files/fileToRemove.txt`;
const fileAbsentErrText = 'FS operation failed';

const remove = async () => {
    try {
        await access(srcFileName);
        return rm(srcFileName)
    } catch {
        console.log(fileAbsentErrText)
    }
};

await remove();