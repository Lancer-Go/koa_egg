/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589588055755_8000';

  // add your middleware config here，全局
  /* config.middleware = [ 'zipware' ];*/

  // this is the way to config your middleware
  /* config.zipware = {
    threshold: 1024,
    enable: true,
    // enable：控制中间件是否开启
    // match：设置只有符和某些规则的请求才会经过这个中间件
    // ignore：设置符合某些规则的请求不经过这个中间件
  };*/
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
