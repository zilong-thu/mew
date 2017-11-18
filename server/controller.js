const path = require('path');
const nunjucks = require('nunjucks');


nunjucks.configure({noCache: true});

module.exports = class Controller {
  renderPage(viewPath, data) {
    let filePath = path.resolve(__dirname, './views', viewPath);
    const str = nunjucks.render(filePath, data);
    return str;
  }
}