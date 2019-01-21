
const connection = require('../db-con');
exports.profile = function profile(req, res){

    // var userId = req.session.userId;
    // if(userId == null){
    //    res.redirect("/login");
    //    return;
    // }
 
    var sql="SELECT * FROM `admin`";          
    connection.query(sql, function(err, result){  
        res.json(result);

    });
 }

 exports.admin = function login(req, res){

    if(req.method == "POST"){
    var post  = req.body;
    var Id= post.id;
    var type=post.type;
   

    res.setHeader('Content-Type', 'application/json');

    if(type=='admin'){
        var sql="SELECT  fName,lName FROM `admin1` WHERE  `aId`='"+Id+"'";  
    }else if(type=='student'){
        var sql="SELECT  fName,lName FROM `student1` WHERE  `sId`='"+Id+"'";  
    }elseif(type=='teacher'){
        var sql="SELECT  fName,lName FROM `teacher1` WHERE  `tId`='"+Id+"'";  
    }


 
   

      
    
    
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