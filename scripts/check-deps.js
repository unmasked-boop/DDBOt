import { existsSync } from 'fs';
import { join } from 'path';

const projectDir = '/vercel/share/v0-project';
const deps = ['object.fromentries', 'rxjs', 'immutable', 'lodash.debounce'];

for (const dep of deps) {
    const depPath = join(projectDir, 'node_modules', dep);
    const exists = existsSync(depPath);
    console.log(`${dep}: ${exists ? 'INSTALLED' : 'MISSING'} (${depPath})`);
}
