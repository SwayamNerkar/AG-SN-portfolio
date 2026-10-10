const fs = require('fs');
const path = require('path');
const dir = 'd:/ON WORK CODE FILES/final protfolio 2026 new (AG)/AG protfolio/src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(/import ContentPlaceholder.*?\n/g, '');
  c = c.replace(/[ \t]*<ContentPlaceholder \/>\r?\n?/g, '');
  fs.writeFileSync(p, c);
  console.log('Cleaned', f);
});
