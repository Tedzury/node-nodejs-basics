import getRootDir from '../shared/lib/utils.js';
import { spawn } from 'child_process';
import { join } from 'path';

const spawnChildProcess = async (args) => {
    const rootDir = getRootDir(import.meta.url);
    const scriptPath = join(rootDir, 'files', 'script.js');

    spawn('node', [scriptPath, ...args], { stdio: 'inherit', stdout: 'inherit'});
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--trulala', '1', '--trololo', '2', '--i_have_no_idea', 'what_else_to_write']);
