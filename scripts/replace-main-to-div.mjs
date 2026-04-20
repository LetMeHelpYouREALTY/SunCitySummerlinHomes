import fs from 'node:fs';
import path from 'node:path';

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (p.endsWith('.tsx')) out.push(p);
  }
  return out;
}

const roots = ['migration/pages-source', 'components', 'app'].map((r) =>
  path.join(process.cwd(), r),
);

for (const root of roots) {
  for (const f of walk(root)) {
    if (path.basename(f) === 'AppProviders.tsx') continue;
    const c = fs.readFileSync(f, 'utf8');
    const c2 = c.replaceAll('<main ', '<div ').replaceAll('</main>', '</div>');
    if (c !== c2) {
      fs.writeFileSync(f, c2);
      console.log(f);
    }
  }
}
