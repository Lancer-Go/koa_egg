const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
app.keys=['im a newer secret','i like turtle'];//设置签名cookie密匙
/*app.keys = new KeyGrip(['im a newer secret', 'i like turtle'],'sha256');需要添加KeyGrip这个模块*/
/*async function User(){
    return Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("这是一个Demo");
        },300)
    })
}*/
app.use(async (ctx,next)=>{
    console.log('Process',ctx.request.method,ctx.request.url,ctx.request.headers,ctx.request.length,ctx.request.originalUrl,ctx.request.href);
    await next();
});
router.get(('/hello/:name'),async (ctx,next)=>{
    var name = ctx.params.name;
    ctx.response.body='<h1>Hello</h1>'+name;//请求路径中使用带变量的/hello/:name，变量通过ctx.params.name访问
});
router.get('/',async (ctx,next)=>{
    ctx.response.body='<h1>index page</h1>';
});
/*app.use(async (ctx,next)=>{
    if(ctx.request.path==='/'){
        ctx.state.user=await User();
        ctx.response.body=ctx.state.user;
    }
    else
        await next();
});
app.use(async (ctx,next)=>{
    if(ctx.request.path==='/error')
        ctx.response.body='Error page';
    else
        await next();
});
app.use(async (ctx,next)=>{
    if(ctx.request.path==='/mypage')
        ctx.response.body='This is my page!';
    else
        await next();
});*/

/*app.context.db=db();//向ctx添加其他属性，更少的require
app.use(async ctx=>{
    console.log(ctx.db);
});//对数据库的引用*/

/*app.on('error',err=>{
    log.error('server error',err)
});//错误事件侦听器

app.on('error',(err,ctx)=>{
    log.error('server error',err, ctx);
});//错误发生在请求/响应环节*/
//ctx.state.user=await User.find(id);通过中间件传递信息到前端视图，可以用于传递数据库信息，或者数据信息
//User.find(id)是一个查找的异步async函数
router.get('/toindex',async (ctx,next)=>{
    ctx.redirect('back');
});

app.use(router.routes());
app.listen(3000);
/*const http = require('http');
http.createServer(app.callback()).listen(3000);*/
