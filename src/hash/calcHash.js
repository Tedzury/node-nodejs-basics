import { createHash } from 'crypto';
import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = `${__dirname}/files/fileToCalculateHashFor.txt`;

const calculateHash = async () => {
    const content = await readFile(filePath, { encoding: 'utf-8'});
    const output = createHash('sha256').update(content).digest('hex');
    console.log(output);
};

await calculateHash();