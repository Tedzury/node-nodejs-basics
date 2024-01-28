const prefix = 'RSS_'

const parseEnv = () => {
    const entries = []
    for (const [key, value] of Object.entries(process.env)) {
        if (key.includes(prefix)) {
            entries.push(`${key}=${value}`);
        }
    }
    const output = entries.join('; ');
    console.log(output);
};

parseEnv();