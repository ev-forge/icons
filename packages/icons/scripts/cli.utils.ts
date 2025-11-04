import readline from 'readline';

export const askYN = async (message: string): Promise<boolean> => new Promise((resolve, reject) => {
    try {
        const autoYes = process.env.CI === 'true' || process.argv.includes('--yes');
        if (autoYes) {
            return resolve(true)
        }

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(`ℹ️ ${message} (y / n)`, async (answer) => {
            rl.close();
            if (answer.toLowerCase() === 'y') resolve(true)
            resolve(false)
        })
    } catch (error) {
        reject(error)
    }
})