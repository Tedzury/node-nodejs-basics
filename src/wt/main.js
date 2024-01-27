import getRootDir from '../shared/lib/utils.js';
import { Worker } from 'worker_threads';
import { availableParallelism } from 'os';
import { join } from 'path';

const rootDir = getRootDir(import.meta.url);
const workerFile = join(rootDir, 'worker.js');
const startFibNum = 10;

const workerLogic = (startNum) => new Promise(res => {
    const myWorker = new Worker(workerFile, { workerData: startNum});

    myWorker.on('message', (data) => {
        res({
            status: 'resolved',
            data,
        });
    })

    myWorker.on('error', () => {
        res({
            status: 'error',
            data: null
        });
    });
});


const performCalculations = async () => {
    const maxWorkersNum = availableParallelism();
    const workersArr = Array.from(Array(maxWorkersNum)).map((_, i) => workerLogic(startFibNum + i));
    const output = await Promise.all(workersArr);
    console.log(output);
};

await performCalculations();