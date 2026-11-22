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
      } else if (query && query.includes('view=projects')) {
        const scrollInjection = `
          <script>
            window.addEventListener('load', () => {
              setTimeout(() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
              }, 1000);
            });
          </script>
        `;
        html = html.replace('</body>', `${scrollInjection}</body>`);
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
  const shotProjects = path.join(screenshotsDir, 'website-projects-section.png');
  const shotModal = path.join(screenshotsDir, 'website-simulation-modal.png');
  const shotMobile = path.join(screenshotsDir, 'website-mobile.png');

  function runShot(args, cb) {
    execFile(chromePath, args, (err) => {
      if (err) console.error('Screenshot err:', err.message);
      cb();
    });
  }

  // 1. Desktop Hero
  runShot([
    '--headless=new', '--disable-gpu', '--hide-scrollbars',
    '--virtual-time-budget=4000', '--window-size=1280,720',
    `--screenshot=${shotHero}`, `http://127.0.0.1:${PORT}/`
  ], () => {
    console.log('1. Hero shot captured');

    // 2. Projects Section
    runShot([
      '--headless=new', '--disable-gpu', '--hide-scrollbars',
      '--virtual-time-budget=4000', '--window-size=1280,720',
      `--screenshot=${shotProjects}`, `http://127.0.0.1:${PORT}/?view=projects`
    ], () => {
      console.log('2. Projects shot captured');

      // 3. Simulation Modal Open
      runShot([
        '--headless=new', '--disable-gpu', '--hide-scrollbars',
        '--virtual-time-budget=5000', '--window-size=1280,720',
        `--screenshot=${shotModal}`, `http://127.0.0.1:${PORT}/?view=modal`
      ], () => {
        console.log('3. Simulation Modal shot captured');

        // 4. Mobile View
        runShot([
          '--headless=new', '--disable-gpu', '--hide-scrollbars',
          '--virtual-time-budget=4000', '--window-size=390,844',
          `--screenshot=${shotMobile}`, `http://127.0.0.1:${PORT}/`
        ], () => {
          console.log('4. Mobile shot captured');
          server.close(() => {
            console.log('All screenshots captured and saved in:', screenshotsDir);
          });
        });
      });
    });
  });
});
