//处理路由相关
function handleBlogServer(req,res){
    const method = req.method;
    if(method=='GET' && req.path=='/api/blog/list'){
        return{
            id:'10',
            title:'标题1',
            content:'5646446',
            time:'4466'
        }
    }
}
module.exports = {handleBlogServer}