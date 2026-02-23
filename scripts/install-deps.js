import { execSync } from 'child_process';

const deps = ['object.fromentries', 'rxjs', 'immutable', 'lodash.debounce'];

console.log('Installing missing dependencies:', deps.join(', '));
try {
    execSync(`npm install ${deps.join(' ')} --save`, {
        cwd: '/vercel/share/v0-project',
        stdio: 'inherit',
    });
    console.log('Dependencies installed successfully.');
} catch (err) {
    console.error('Failed to install dependencies:', err.message);
    process.exit(1);
}
