const parseArgs = () => {
    const output = process.argv
        .map((arg, i) =>  arg.startsWith('--') ? `${arg.replace('--', '')} is ${process.argv[i + 1]}` : null)
        .filter(item => item)
        .join(', ');
    console.log(output);
};

parseArgs();