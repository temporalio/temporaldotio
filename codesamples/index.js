const shiki = require('shiki');
const fs = require('fs');
const path = require('path');

const arr = ['js', 'go', 'java', 'php'];

for (const lang of arr) {
  shiki
    .getHighlighter({
      theme: 'material-palenight'
    })
    .then((highlighter) => {
      const text = highlighter
        .codeToHtml(fs.readFileSync(path.join(__dirname, 'sample.' + lang), 'utf-8'), lang)
        .replaceAll('>}<', '>{"}"}<')
        .replaceAll('>{<', '>{"{"}<')
        .replaceAll('    ', '{"    "}')
        .replaceAll('class="line"', 'style="display:block"');
      fs.writeFileSync(path.join(__dirname, `sample-${lang}.html`), text);
    });
}
