import fs from 'fs';
import path from 'path';

const root = path.join(process.cwd(), 'migration', 'pages-source');

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (p.endsWith('.tsx')) {
      let s = fs.readFileSync(p, 'utf8');
      const n = s.replace(/from '@\/(.+)\.css"/g, "from '@/$1.css'");
      const n2 = n.replace(/from '@\/(.+)"/g, (full, inner) => {
        if (full.endsWith(".css'")) return full;
        if (full.includes('.css')) return full;
        return `from '@/${inner}'`;
      });
      if (n2 !== s) {
        fs.writeFileSync(p, n2);
        console.log('fixed', p);
      }
    }
  }
}

walk(root);
