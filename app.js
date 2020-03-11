//处理请求和响应
const Router = require('./src/router/blog');
const querystring = require('querystring');
function handleServer(req,res){
    req.path = req.url.split('?')[0];
    res.setHeader = ('Conent-type','application/json');
    req.query = querystring.parse(req.url.split('?')[1]);
    const blogData = Router.handleBlogServer(req,res);
    res.end(JSON.stringify(blogData));
}
module.exports = handleServer;