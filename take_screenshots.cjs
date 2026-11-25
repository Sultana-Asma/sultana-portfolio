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

      if (query && query.includes('view=skills-only')) {
        const css = `
          <style>
            header, #about, #projects, #education, #services, #contact, footer { display: none !important; }
            #skills { padding-top: 1.5rem !important; padding-bottom: 2rem !important; min-height: 100vh !important; background: #090d18 !important; }
          </style>
        `;
        html = html.replace('</head>', `${css}</head>`);
      } else if (query && query.includes('view=education')) {
        const css = `
          <style>
            header, #about, #skills, #projects, #services, #contact, footer { display: none !important; }
            #education { padding-top: 1.5rem !important; padding-bottom: 2rem !important; min-height: 100vh !important; background: #090d18 !important; }
          </style>
        `;
        html = html.replace('</head>', `${css}</head>`);
      } else if (query && query.includes('view=contact')) {
        const css = `
          <style>
            header, #about, #skills, #projects, #education, #services, footer { display: none !important; }
            #contact { padding-top: 1.5rem !important; padding-bottom: 2rem !important; min-height: 100vh !important; background: #090d18 !important; }
          </style>
        `;
        html = html.replace('</head>', `${css}</head>`);
      } else if (query && query.includes('view=projects')) {
        const css = `
          <style>
            header, #about, #skills, #education, #services, #contact, footer { display: none !important; }
            #projects { padding-top: 1.5rem !important; padding-bottom: 2rem !important; min-height: 100vh !important; background: #090d18 !important; }
          </style>
        `;
        html = html.replace('</head>', `${css}</head>`);
      } else if (query && query.includes('view=modal')) {
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
  const shotSkills = path.join(screenshotsDir, 'website-skills-section.png');
  const shotProjects = path.join(screenshotsDir, 'website-projects-section.png');
  const shotEducation = path.join(screenshotsDir, 'website-education-table.png');
  const shotContact = path.join(screenshotsDir, 'website-contact-form.png');
  const shotModal = path.join(screenshotsDir, 'website-simulation-modal.png');

  function runShot(args, cb) {
    execFile(chromePath, args, (err) => {
      if (err) console.error('Screenshot err:', err.message);
      cb();
    });
  }

  // 1. Desktop Hero (Homepage output at 1280x720 16:9)
  runShot([
    '--headless=new', '--disable-gpu', '--hide-scrollbars',
    '--virtual-time-budget=4000', '--window-size=1280,720',
    `--screenshot=${shotHero}`, `http://127.0.0.1:${PORT}/`
  ], () => {
    console.log('1. Hero shot captured');

    // 2. Skills Section Output
    runShot([
      '--headless=new', '--disable-gpu', '--hide-scrollbars',
      '--virtual-time-budget=4000', '--window-size=1280,720',
      `--screenshot=${shotSkills}`, `http://127.0.0.1:${PORT}/?view=skills-only`
    ], () => {
      console.log('2. Skills shot captured');

      // 3. Projects Section Output
      runShot([
        '--headless=new', '--disable-gpu', '--hide-scrollbars',
        '--virtual-time-budget=4000', '--window-size=1280,720',
        `--screenshot=${shotProjects}`, `http://127.0.0.1:${PORT}/?view=projects`
      ], () => {
        console.log('3. Projects shot captured');

        // 4. Education Table Output
        runShot([
          '--headless=new', '--disable-gpu', '--hide-scrollbars',
          '--virtual-time-budget=4000', '--window-size=1280,720',
          `--screenshot=${shotEducation}`, `http://127.0.0.1:${PORT}/?view=education`
        ], () => {
          console.log('4. Education table shot captured');

          // 5. Contact Form Output
          runShot([
            '--headless=new', '--disable-gpu', '--hide-scrollbars',
            '--virtual-time-budget=4000', '--window-size=1280,720',
            `--screenshot=${shotContact}`, `http://127.0.0.1:${PORT}/?view=contact`
          ], () => {
            console.log('5. Contact form shot captured');

            // 6. Simulation Modal Output
            runShot([
              '--headless=new', '--disable-gpu', '--hide-scrollbars',
              '--virtual-time-budget=5000', '--window-size=1280,720',
              `--screenshot=${shotModal}`, `http://127.0.0.1:${PORT}/?view=modal`
            ], () => {
              console.log('6. Simulation Modal shot captured');
              server.close(() => {
                console.log('All 6 screenshots successfully captured in uniform 16:9 widescreen!');
              });
            });
          });
        });
      });
    });
  });
});
