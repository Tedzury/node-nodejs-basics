import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { join } from 'path';
import getRootDir from '../shared/lib/utils.js';

const rootDir = getRootDir(import.meta.url);

const srcFile = join(rootDir, 'files', 'archive.gz');
const destFile = join(rootDir, 'files', 'fileToCompress.txt');


const decompress = async () => {
    const readable = createReadStream(srcFile);
    const unZipper = createGunzip();
    const writable = createWriteStream(destFile);
    pipeline(
        readable,
        unZipper, 
        writable,
    ); 
};

await decompress();