const Koa = require('koa');
const Router = require('@koa/router');
const body = require('koa-bodyparser');
const logger = require('koa-logger');
const path = require('path');
const render = require('koa-ejs');
const error = require('./middlewares/error');
const users = require('./routers/user');
const test = require('./routers/test');


const app = new Koa();
const router = new Router();



router.get('/', async ctx => {
  await ctx.render('index');
});

render(app, {
  root: path.join(__dirname, 'views'),
  cache: false,
  debug: true
})

app
  .use(logger())
  .use(body())
  .use(error)
  .use(router.routes())
  .use(router.allowedMethods())
  .use(users.routes())
  .use(test.routes());
app.listen(10086);
