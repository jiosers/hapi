const Hapi=require('hapi');
const config=require('./config')
const routesHelloHapi=require('./routes/hello-hapi');
const pluginHapiSwagger=require('./plugins/hapi-swagger');

const server=new Hapi.Server();
//配置服务器启动host端口
server.connection({
    port:config.port,
    host:config.host
})  
const init=async ()=>{
    await server.register([
        ...pluginHapiSwagger
    ]);
    server.route([
       ...routesHelloHapi
    ]);
    await server.start();
    console.log(`Server is running at:${server.info.uri}`)
}
//启动服务

init();