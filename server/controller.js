const path = require('path');
const nunjucks = require('nunjucks');


module.exports = class Controller {
  renderPage(viewPath, data) {
    let filePath = path.resolve(__dirname, './views', viewPath);
    console.log('filePath => ', filePath);
    const str = nunjucks.render(filePath, data);
    return str;
  }
}