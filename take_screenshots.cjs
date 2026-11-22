const http = require('http');
const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');

const distDir = path.join(__dirname, 'dist');
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let [rawPath, query] = req.url.split('?');
  let filePath = path.join(distDir, rawPath === '/' ? 'index.html' : rawPath);
  const ext = path.extname(filePath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    if (ext === '.html') {
      let html = fs.readFileSync(filePath, 'utf8');
      if (query && query.includes('view=modal')) {
        const modalInjection = `
          <script>
            window.addEventListener('load', () => {
              setTimeout(() => {
                const btn = document.querySelector('.project-btn-primary') || document.querySelector('button[aria-haspopup="dialog"]');
                if (btn) {
                  btn.click();
                  setTimeout(() => {
                    const rainBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Rain'));
                    if (rainBtn) rainBtn.click();
                  }, 800);
                }
              }, 1200);
            });
          </script>
        `;
        html = html.replace('</body>', `${modalInjection}</body>`);
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
      return;
    }

    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
});

const PORT = 55432;
server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server started on http://127.0.0.1:${PORT}`);
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const screenshotsDir = path.join(__dirname, 'public', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const shotHero = path.join(screenshotsDir, 'website-desktop-hero.png');
  const shotTall = path.join(screenshotsDir, 'website-skills-section.png');
  const shotModal = path.join(screenshotsDir, 'website-simulation-modal.png');

  function runShot(args, cb) {
    execFile(chromePath, args, (err) => {
      if (err) console.error('Screenshot err:', err.message);
      cb();
    });
  }

  // 1. Desktop Hero (Homepage output)
  runShot([
    '--headless=new', '--disable-gpu', '--hide-scrollbars',
    '--virtual-time-budget=5000', '--window-size=1280,720',
    `--screenshot=${shotHero}`, `http://127.0.0.1:${PORT}/`
  ], () => {
    console.log('1. Hero shot captured');

    // 2. Tall Screenshot covering Skills & About section
    runShot([
      '--headless=new', '--disable-gpu', '--hide-scrollbars',
      '--virtual-time-budget=5000', '--window-size=1280,1800',
      `--screenshot=${shotTall}`, `http://127.0.0.1:${PORT}/`
    ], () => {
      console.log('2. Tall (Skills) shot captured');

      // 3. Simulation Modal Output
      runShot([
        '--headless=new', '--disable-gpu', '--hide-scrollbars',
        '--virtual-time-budget=6000', '--window-size=1280,720',
        `--screenshot=${shotModal}`, `http://127.0.0.1:${PORT}/?view=modal`
      ], () => {
        console.log('3. Simulation Modal shot captured');
        server.close(() => {
          console.log('All screenshots ready!');
        });
      });
    });
  });
});
