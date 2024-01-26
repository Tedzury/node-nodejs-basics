import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createGzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcFilePath = `${__dirname}/files/fileToCompress.txt`;
const destFilePath = `${__dirname}/files/archive.gz`;

const compress = async () => {
    const readable = createReadStream(srcFilePath);
    const zipper = createGzip();
    const writable = createWriteStream(destFilePath);
    pipeline(
        readable,
        zipper, 
        writable,
        err => {
            console.log(err);
        }
    );
};

await compress();