import { access, cp } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcFolderPath = `${__dirname}/files`;
const destFolderPath = `${__dirname}/files_copy`;
const foldersErrText = 'FS operation failed';

const copy = async () => {
    let doesSrcExist = false;
    let doesNotDestExist = false;
    try {
        await access(srcFolderPath)
        doesSrcExist = true;
    } catch {}
    try {
        await access(destFolderPath)
    } catch {
        doesNotDestExist = true;
    }
    try {
        if (doesSrcExist && doesNotDestExist) {
            return cp(srcFolderPath, destFolderPath, {recursive: true});
        }
        throw new Error(foldersErrText);
    } catch (err) {
        console.log(err.message);
    }
};

await copy();
