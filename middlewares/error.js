const error = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
    let message;
    switch (err.status) {
      case 401:
        message = '授权失败,请重新登录';
        break;

      default:
        message = '服务器出错';
        break;
    }
    ctx.body = {
      message,
      status: 1
    }
  }
};

module.exports = error;