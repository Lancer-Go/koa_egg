'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  const zipware = app.middleware.zipware({ threshold: 1024 });
  router.get('/needgzip', zipware);// 单次进行挂载middleware，若为全局的时候，上面的路径‘/’的路由将会失效，将全部显示这个全局路由
  router.get('/user/:id', controller.user.info);
};
