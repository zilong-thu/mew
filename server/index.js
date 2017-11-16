const Koa = require('koa');
const app = new Koa();
const config = require('config');
const router = require('koa-routeify');


// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response
app.use(async ctx => {
  ctx.body = 'Hello World';
});

// router
app.use(router(app, config.route));

const port = config.port || 3000;
app.listen(port);
console.log(`server is running at: \nhttp://localhost:${port}`);
