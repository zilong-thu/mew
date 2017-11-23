const Controller = require('../controller');
const debug = require('debug')('mew');


module.exports = class Home extends Controller {
  index(name){
    var str = this.reactRender('home/index.js', {title: 'Hello World!'});
    debug('html string => %s', str);
    this.ctx.body = str;
  }
}
