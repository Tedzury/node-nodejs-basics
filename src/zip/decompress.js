import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcFilePath = `${__dirname}/files/archive.gz`;
const destFilePath = `${__dirname}/files/fileToCompress.txt`;

const decompress = async () => {
    const readable = createReadStream(srcFilePath);
    const unZipper = createUnzip();
    const writable = createWriteStream(destFilePath);
    pipeline(
        readable,
        unZipper, 
        writable,
        err => {
            console.log(err);
        }
    ); 
};

await decompress();