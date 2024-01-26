import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = `${__dirname}/files/fileToRead.txt`;

const read = async () => {
    const readStream = createReadStream(filePath);
    readStream.pipe(stdout)
};

await read();