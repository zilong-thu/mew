const Controller = require('../controller');


module.exports = class Home extends Controller {
  index(name){
    this.ctx.body = this.renderPage('home/index.njk', {title: 'Hello World!'});
  }
}
