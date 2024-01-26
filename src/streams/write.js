import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { stdin } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = `${__dirname}/files/fileToWrite.txt`;

const write = async () => {
    const writeStream = createWriteStream(filePath);
    stdin.pipe(writeStream);
};

await write();