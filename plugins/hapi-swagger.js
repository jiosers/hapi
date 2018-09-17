const inert=require('inert');
const vision=require('vision');
const package=require('package');
const hapiSwagger=require('hapi-swagger');
module.exports=[
    inert,
    vision,
    {
        register:hapiSwagger,
        options:{
            info:{
                title:'接口文档',
                version:package.version
            }
        },
        //定义接口已tags属性定义为分组
        grouping:'tags',
        tags:[
            {name:'tests',descript:'测试相关'}
        ]
    }
]