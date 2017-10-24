router.get('/data', function (req, res) {
    var data = [
        {"text": 1},
        {"text": 2},
        {"text": 3},
        {"text": 4},
        {"text": 5},
        {"text": 6},
        {"text": 7},
        {"text": 8},
        {"text": 9},
        {"text": 10},
        {"text": 11},
        {"text": 12},
        {"text": 13},
        {"text": 14},
        {"text": 15}
    ]
    
    var index = req.query.index
    var len = 4
    var retData = data.splice(index*len, len)
    
    console.log(index)
    
    res.send({
        data: retData
    })
})


// //假设域名是localhost, 端口是8080
//
// //更多详细使用方法参考 http://www.expressjs.com.cn/guide/routing.html
//
// /**
//  * 当 http://localhost:8080/getInfo 的GET请求到来时被下面匹配到进行处理
//  * 发送JSON格式的响应数据 {name: 'ruoyu'}
//  */
// router.get('/getInfo', function(req, res) {
//   res.send({name: 'ruoyu'})
//   // info = require(./db.json)
//   // res.send(info)
// })
//
//
//
// /**
//  * 当 http://localhost:8080/getFriends 的GET请求到来时被下面匹配到进行处理
//  * 通过req.query获取请求的参数对象
//  * 通过 req.send发送响应
//  */
// router.get('/getFriends', function(req, res) {
// 	var username = req.query.username // 通过 req.query获取请求参数
// 	var friends
//
//   //根据请求参数mock数据
//   switch (username){
//   	case 'ruoyu':
//   		friends = ['小米', '小刚']
//   		break
//   	case 'hunger':
//   		friends = ['小谷', '小花']
//   		break;
//   	default:
//   		friends = ['没有朋友']
//   }
//   res.send(friends)
// })
//
//
// /**
//  * 当 http://localhost:8080/comment 的GET请求到来时被下面匹配到进行处理
//  * 通过req.body获取post请求的参数对象
//  * 通过 req.send发送响应
//  */
// router.post('/comment', function(req, res) {
//   console.log(req.body.comment) // 可通过req.body获取 post 提交的参数
//   res.send({status: 'ok'})
// })
//
// /**
//  * 使用 router.use可处理所有类型的请求
// */
// router.use('/hello', (req, res)=>{
//   res.send('world')
// })
//
//
// /**
//  * 设置 header 可以处理跨域请求
// */
// router.use('/hi', (req, res)=>{
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.send('world')
// })
//
