const fs = require('fs');
const http = require('http');

let hasError = false;

// 1. Check static HTML files on disk
['aerform.html', 'nomad.html', 'index.html', 'digital-receipt.html'].forEach(file => {
  console.log(`\n=== Checking static file: ${file} ===`);
  const content = fs.readFileSync(file, 'utf8');
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
  let m;
  let count = 0;
  while ((m = imgRegex.exec(content)) !== null) {
    count++;
    const src = m[1];
    if (src.startsWith('http://') || src.startsWith('https://')) {
      console.log(`  [EXTERNAL] ${src}`);
      continue;
    }
    const exists = fs.existsSync(src);
    console.log(`  ${exists ? '✓' : '✗ [MISSING]'} ${src}`);
    if (!exists) hasError = true;
  }
  console.log(`Total local images in ${file}: ${count}`);
});

// 2. Check Next.js routes and image endpoints
console.log('\n=== Checking Next.js HTTP Server on port 3001 ===');
const endpoints = [
  '/',
  '/project/digital-receipt',
  '/project/aerform',
  '/project/nomad',
  '/assets/images/projects/aerform/aerform_hero.png',
  '/assets/images/projects/aerform/aerform_discovery.png',
  '/assets/images/projects/aerform/pulse.jpg',
  '/assets/images/projects/aerform/vortex.jpg',
  '/assets/images/projects/aerform/running.jpg',
  '/assets/images/projects/aerform/basketball.jpg',
  '/assets/images/projects/aerform/aerform_categories.png',
  '/assets/images/projects/aerform/aerform_engineering.png',
  '/assets/images/projects/aerform/trainer.jpg',
  '/assets/images/projects/aerform/club.jpg',
  '/assets/images/projects/nomad/nomad_full.png',
  '/assets/images/projects/nomad/nomad_atmosphere.png',
  '/assets/images/projects/nomad/nomad_interface.png'
];

let pending = endpoints.length;
endpoints.forEach(ep => {
  http.get('http://localhost:3001' + ep, res => {
    const ok = res.statusCode === 200;
    console.log(`  ${ok ? '✓' : '✗'} ${res.statusCode} ${ep}`);
    if (!ok) hasError = true;
    pending--;
    if (pending === 0) {
      if (hasError) {
        console.error('\nFAIL: Some checks did not pass.');
        process.exit(1);
      } else {
        console.log('\nSUCCESS: 100% of all image references and routes passed!');
        process.exit(0);
      }
    }
  }).on('error', err => {
    console.error(`  ✗ ERROR ${ep}: ${err.message}`);
    hasError = true;
    pending--;
    if (pending === 0) process.exit(1);
  });
});
