
const connection = require('./../db-con');
exports.signup = function signup(req, res){
    message = '';
    if(req.method == "POST"){
       var post  = req.body;
      
       var fname= post.fname;
       var lname= post.lname;
       var email= post.email;
       var phone= post.phone;
       var pw= post.pw;
       var rpw= post.rpw;
       var subscribe= post.subscribe;
 
      
        
        
      var sql = "INSERT INTO `Student`(`fname`,`lname`,`email`,`phone`, `pw`,`rpw`,`subscribe`) VALUES ('" + fname + "','" + lname + "','" + email + "','" + phone + "','" + pw + "','" + rpw + "','" + subscribe + "')";
 //var sql = "INSERT INTO test (name) VALUES ('adda')";                                                                                     
       var query = connection.query(sql, function(err, result) {
            if (err){
             
                console.log("not found user");
                res.status(404);
                res.json({user: null});
                //res.send(JSON.stringify({ a: 1 }));
    }
    else{
        res.status(200);
        res.json({user: result[0]});
    }
            
 });
 
    } else {
       console.log("method not allowed")
    }
 }