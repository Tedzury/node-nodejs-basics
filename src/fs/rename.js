import { access, rename as myRename } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcFileName = `${__dirname}/files/wrongFilename.txt`;
const destFileName = `${__dirname}/files/properFilename.md`;
const filesErrText = 'FS operation failed';

const rename = async () => {
    let doesSrcExist = false;
    let doesNotDestExist = false;
    try {
        await access(srcFileName)
        doesSrcExist = true;
    } catch {}
    try {
        await access(destFileName)
    } catch {
        doesNotDestExist = true;
    }
    try {
        if (doesSrcExist && doesNotDestExist) {
            return myRename(srcFileName, destFileName);
        }
        throw new Error(filesErrText);
    } catch (err) {
        console.log(err.message);
    } 
};

await rename();