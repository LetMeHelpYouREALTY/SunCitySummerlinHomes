/**
 * Prepare migration/pages-source for App Router imports:
 * - Remove next/head usage (metadata lives in app route page.tsx files)
 * - Remove nested PageTransition (root layout wraps once)
 * - Add 'use client' when hooks or custom elements are used
 */
import fs from 'fs';
import path from 'path';

const root = path.join(process.cwd(), 'migration', 'pages-source');

const skipFiles = new Set([
  '_app.tsx',
  '_document.tsx',
  '_error.tsx',
]);

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

function stripHead(source) {
  let s = source;
  s = s.replace(/import Head from ['"]next\/head['"];\r?\n?/g, '');
  s = s.replace(/<Head>[\s\S]*?<\/Head>\s*/g, '');
  return s;
}

function stripPageTransition(source) {
  let s = source;
  s = s.replace(/import PageTransition from ['"][^'"]+['"];\r?\n?/g, '');
  s = s.replace(/<PageTransition>\s*/g, '');
  s = s.replace(/\s*<\/PageTransition>/g, '');
  return s;
}

function needsClient(source) {
  return (
    /\buseState\b/.test(source) ||
    /\buseEffect\b/.test(source) ||
    /\buseRouter\b/.test(source) ||
    /\buseRef\b/.test(source) ||
    /realscout-office-listings/.test(source) ||
    /suppressHydrationWarning/.test(source)
  );
}

function ensureUseClient(source) {
  if (!needsClient(source)) return source;
  if (/^['"]use client['"]/m.test(source.trim())) return source;
  return `'use client';\n\n${source}`;
}

for (const file of walk(root)) {
  const base = path.basename(file);
  if (skipFiles.has(base)) continue;
  // Hand-migrated: server component + data from lib/zipcodes-data.ts
  if (file.includes(`${path.sep}zipcodes${path.sep}[zipcode].tsx`)) continue;

  let s = fs.readFileSync(file, 'utf8');
  const orig = s;
  s = stripHead(s);
  s = stripPageTransition(s);
  s = ensureUseClient(s);

  if (s !== orig) {
    fs.writeFileSync(file, s);
    console.log('updated', path.relative(process.cwd(), file));
  }
}

console.log('done');
