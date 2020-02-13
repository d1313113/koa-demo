const Router = require('@koa/router');
const router = new Router();
const { User } = require('../models/user');

router.prefix('/api/user');

router.get('/', ctx => {
  ctx.body = '用户主页';
});

// 注册
router.post('/register', async ctx => {
  const { username, password } = ctx.request.body;
  const user = await User.create({
    username,
    password,
    disable: 0
  });
  ctx.body = {
    msg: 'ok'
  };
});

// 查询用户
router.get('/index', async ctx => {
  ctx.body = await User.find();
});

// 登录
router.post('/login', async ctx => {
  const { username, password } = ctx.request.body;
  const user = await User.findOne({
    username,
    password
  });

  if (!user) {
    ctx.status = 401;
    return ctx.response.body = {
      msg: '用户不存在或密码错误'
    };
  }
  ctx.response.body = {
    user: user.username,
    pwd: user.password
  };
});

// 禁用账号
router.post('/delete', async ctx => {
  const { username } = ctx.request.body;
  if (!username) {
    return ctx.respond.body = {
      msg: '用户名错误',
      status: 1
    };
  }
  await User.findOneAndUpdate(
    {
      username
    },
    {
      disable: 1
    }
  );
  ctx.response.body = 'delete done';
});

module.exports = router;