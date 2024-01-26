import { access, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = `${__dirname}/files/fileToRead.txt`;
const fileAbsentErrText = 'FS operation failed';

const read = async () => {
    try {
        await access(filePath);
        const content = await readFile(filePath, { encoding: 'utf-8'});
        return console.log(content);
    } catch {
        console.log(fileAbsentErrText)
    }
};

await read();