import fs from 'fs';
import path from 'path';

const root = path.join(process.cwd(), 'migration', 'pages-source');

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'api') continue;
      walk(p, out);
    } else if (ent.name.endsWith('.tsx')) out.push(p);
  }
  return out;
}

for (const file of walk(root)) {
  let s = fs.readFileSync(file, 'utf8');
  const orig = s;
  s = s.replace(/from ['"]\.\.\/\.\.\/styles\//g, "from '@/styles/");
  s = s.replace(/from ['"]\.\.\/\.\.\/components\//g, "from '@/components/");
  s = s.replace(/from ['"]\.\.\/\.\.\/utils\//g, "from '@/utils/");
  s = s.replace(/from ['"]\.\.\/styles\//g, "from '@/styles/");
  s = s.replace(/from ['"]\.\.\/components\//g, "from '@/components/");
  s = s.replace(/from ['"]\.\.\/utils\//g, "from '@/utils/");
  if (s !== orig) fs.writeFileSync(file, s);
}

console.log('imports fixed');
