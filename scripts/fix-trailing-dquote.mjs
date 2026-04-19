import fs from 'fs';
import path from 'path';

const root = path.join(process.cwd(), 'migration', 'pages-source');

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (p.endsWith('.tsx')) {
      let s = fs.readFileSync(p, 'utf8');
      const n = s.replace(/from '@\/[^']+"/g, (m) => `${m.slice(0, -1)}'`);
      if (n !== s) {
        fs.writeFileSync(p, n);
        console.log('fixed', p);
      }
    }
  }
}

walk(root);
