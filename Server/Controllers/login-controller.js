const connection = require('./../db-con');
exports.login = function login(req, res){
if(req.method == "POST"){
    var post  = req.body;
    var email= post.email;
    var pw= post.pw;
    res.setHeader('Content-Type', 'application/json');
    var sql="SELECT  fname, lname,email,pw FROM `student` WHERE  `email`='"+email+"' and pw = '"+pw+"'";    
    console.log(sql);                     
    var query = connection.query(sql, function(err, result) {
        if(result.length){
            // req.session.userId = result[0].id;
            // req.session.user = result[0];
             
           res.status(200);
            res.json({user: result[0]});
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
         
