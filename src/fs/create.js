import { access, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = `${__dirname}/files/fresh.txt`;
const fileContent = 'I am fresh and young';
const fileExistErrText = 'FS operation failed';

const create = async () => {
    try {
        await access(filePath)
        throw new Error(fileExistErrText);
    } catch(err) {
        if (err.message === fileExistErrText) return console.log(err.message)
        try {
            writeFile(filePath, fileContent);
        } catch (err) {
            console.log('Something went wrong during file write')
        }
    }
};

await create();