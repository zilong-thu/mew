module.exports = class Home {
  index(name){
    console.log('haha');
    this.ctx.body = `Hello ${ name || 'World' }!`;
  }
}
