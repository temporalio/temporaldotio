const shiki = require('shiki');
const fs = require('fs');
const path = require('path');

const arr = ['js', 'go', 'java', 'php'];

let data = {};
(async function () {
  for (const lang of arr) {
    await shiki
      .getHighlighter({
        theme: 'material-palenight'
      })
      .then((highlighter) => {
        const text = highlighter
          .codeToHtml(fs.readFileSync(path.join(__dirname, 'sample.' + lang), 'utf-8'), lang)
          .replaceAll('>}<', '>{"}"}<')
          .replaceAll('>{<', '>{"{"}<')
          .replaceAll('    ', '{"    "}')
          .replaceAll('class="line"', 'style="display:block"')
          .replaceAll('class="shiki"', 'className="p-4 overflow-x-auto"');
        data[lang] = text;
      });
  }

  // console.log(Object.keys(data))
  fs.writeFileSync(
    path.join(__dirname, `HeroSamples.js`),
    `
      export const Node = (
        ${data['js']}
      )
    
      export const Go = (
        ${data['go']}
      )
      export const Java = (
        ${data['java']}
      )
      export const PHP = (
        ${data['php']}
      )
    
    `
  );
})();
