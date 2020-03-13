const Router = require('@koa/router');
const router = new Router();

router.prefix('/api/test');

router.get('/', ctx => {
  ctx.response.body = {
    code: 0,
    data: {
      name: '你好',
      pwd: 10086
    }
  };
});

module.exports = router;