import { access, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderPath = `${__dirname}/files`;
const folderAbsentErrText = 'FS operation failed';

const list = async () => {
    try {
        await access(folderPath);
        const list = await readdir(folderPath);
        return list.forEach((item) => console.log(item));
    } catch {
        console.log(folderAbsentErrText)
    } 
};

await list();