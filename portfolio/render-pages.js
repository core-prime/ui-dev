const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const outDir = path.join(__dirname, 'assets', 'projects', 'pdf-pages');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const pdfBuffer = fs.readFileSync('C:/Users/rojan/.gemini/antigravity/brain/c739d145-76d5-4c8b-95e3-2a9fb9f96eef/scratch/drive-portfolio.pdf');

const html = `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
</head>
<body style="background:#111; color:#fff; font-family:sans-serif;">
<div id="status">Starting render...</div>
<canvas id="cvs"></canvas>
<script>
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  async function run() {
    try {
      const loadingTask = pdfjsLib.getDocument('/pdf');
      const pdf = await loadingTask.promise;
      document.getElementById('status').innerText = 'Loaded ' + pdf.numPages + ' pages';
      
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.getElementById('cvs');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');
        await page.render({ canvasContext: ctx, viewport: viewport }).promise;
        const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
        
        await fetch('/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ page: i, data: dataUrl })
        });
        document.getElementById('status').innerText = 'Saved page ' + i + '/' + pdf.numPages;
      }
      await fetch('/done');
    } catch(err) {
      await fetch('/error?msg=' + encodeURIComponent(err.stack || err.message));
    }
  }
  run();
</script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.url === '/pdf') {
    res.writeHead(200, { 'Content-Type': 'application/pdf', 'Content-Length': pdfBuffer.length });
    res.end(pdfBuffer);
  } else if (req.url === '/save' && req.method === 'POST') {
    let body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
      const full = Buffer.concat(body).toString('utf8');
      const json = JSON.parse(full);
      const b64 = json.data.replace(/^data:image\/jpeg;base64,/, '');
      fs.writeFileSync(path.join(outDir, `page_${json.page}.jpg`), Buffer.from(b64, 'base64'));
      console.log(`Rendered page ${json.page}.jpg (${(b64.length * 0.75 / 1024).toFixed(0)} KB)`);
      res.writeHead(200);
      res.end('ok');
    });
  } else if (req.url === '/done') {
    console.log('All pages rendered and saved successfully!');
    res.writeHead(200);
    res.end('ok');
    setTimeout(() => process.exit(0), 1000);
  } else if (req.url.startsWith('/error')) {
    console.error('Error from browser:', req.url);
    res.writeHead(200);
    res.end('ok');
    setTimeout(() => process.exit(1), 1000);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(48921, () => {
  console.log('PDF Renderer server listening on port 48921...');
  // Launch Edge in background
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const cmd = `"${edgePath}" --headless --disable-gpu "http://localhost:48921"`;
  exec(cmd, (err) => {
    if (err) console.error('Edge execution error:', err.message);
  });
});
