const path     = require('path');
const nunjucks = require('nunjucks');
const ReactDOMServer = require('react-dom/server');
const debug = require('debug')('mew');

nunjucks.configure({noCache: true});

module.exports = class Controller {
  renderPage(viewPath, data) {
    let filePath = path.resolve(__dirname, './views', viewPath);
    const str = nunjucks.render(filePath, data);
    return str;
  }

  reactRender(jsxPath, data) {
    let filePath = path.resolve(__dirname, './views', jsxPath);
    let comp = require(filePath);
    debug('reactRender comp => %j', comp);
    let str = ReactDOMServer.renderToString(<div>Hello</div>);
    debug('reactRender: \n file path => %s\n str => %s', filePath, str);
    return str;
  }
}