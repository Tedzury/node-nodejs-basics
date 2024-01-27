import { createHash } from 'crypto';
import { readFile } from 'fs/promises'
import getRootDir from '../shared/lib/utils.js'
import { join } from 'path';

const rootDir = getRootDir(import.meta.url);
const filePath = join(rootDir, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const content = await readFile(filePath, { encoding: 'utf-8'});
    const output = createHash('sha256').update(content).digest('hex');
    console.log(output);
};

await calculateHash();