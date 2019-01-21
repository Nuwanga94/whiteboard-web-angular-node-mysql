const connection = require('./../db-con');
exports.login = function login(req, res){

    if(req.method == "POST"){
    var post  = req.body;
    var type = post.type;
    var EmailId= post.email;
    var Password= post.pw;

    res.setHeader('Content-Type', 'application/json');

    if(type=='admin'){
        var sql="SELECT  aId FROM `admin1` WHERE  `email`='"+EmailId+"' and pw = '"+Password+"'";    
   
    }
    else if(type=='student'){
        var sql="SELECT  sId FROM `student1` WHERE  `email`='"+EmailId+"' and pw = '"+Password+"'";    
   
    }else if(type=='teacher'){
        var sql="SELECT  tId FROM `teacher1` WHERE  `email`='"+EmailId+"' and pw = '"+Password+"'";    
   
    }

    console.log(sql);   
    
    
    var query = connection.query(sql, function(err, result) {
        if(result.length){
            // req.session.userId = result[0].id;
            // req.session.user = result[0];
             
           res.status(200);
            res.json(result[0]);
           // res.send(JSON.stringify({ user: result.length }));
            
         }
         else{
            console.log("not found user");
            res.status(404);
            res.json({user: null});
            //res.send(JSON.stringify({ a: 1 }));
         }
                 
      });
   } else {
    res.status(400).end();
    // res.send(JSON.stringify({ a: 1 }));
    //   res.render(' http://localhost:4200',{message: message});
   }
}
         
