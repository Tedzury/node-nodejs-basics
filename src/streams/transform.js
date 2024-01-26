import { stdin, stdout } from 'process';
import { Transform, pipeline } from 'stream';

const transform = async () => {
    const readable = stdin;
    const writable = stdout;
    const transform = new Transform({
        transform(chunk, end, cb) {
            const reversedChunk = chunk.toString().trim().split('').reverse().join('');
            cb(null, reversedChunk + '\n');
        }
    })
    pipeline(
        readable,
        transform,
        writable,
        err => {
            console.log(err);
        }
    )
};

await transform();