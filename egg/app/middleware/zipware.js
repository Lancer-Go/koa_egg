'use strict';
// 本来打算用egg里面的demo，但是好像有个包已经不能下载了
// eslint-disable-next-line no-unused-vars
module.exports = (options, app) => {
  return async function zipware(ctx, next) {
    await next();
    const url = ctx.request.url;
    ctx.body = '获取到的ip是: ' + url;
  };
};
// 创建了一个简单的中间件zipware，需要手动在config.default.js进行挂载(此方法是全局的)
