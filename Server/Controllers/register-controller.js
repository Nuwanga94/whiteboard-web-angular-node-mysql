
const connection = require('./../db-con');
var uuid = require('uuid');
exports.signup = function signup(req, res){
    message = '';
    if(req.method == "POST"){
       var post  = req.body;
       var type = post.type;

       
       var aId = uuid.v1();

       var FirstName= post.FirstName;
       var MidName= post.MidName;
       var LastName= post.LastName;

       var EmailId= post.EmailId;

       var Password= post.Password;
       var RePassword= post.RePassword;

       var No= post.No;
       var Street= post.Street;
       var City= post.City;


       var ContactNo= post.ContactNo;
       
      
      
 
      if(type=='admin'){
        var sql = "INSERT INTO `admin1`(`aId`,`fName`,`mName`,`lName`,`email`,`pw`,`rpw`, `addr1`,`addr2`,`addr3`,`phone`) VALUES ('" + aId + "','" + FirstName + "','" + MidName + "','" + LastName + "','" + EmailId + "','" + Password + "','" + RePassword + "','" + No + "','" + Street + "','" + City + "','" + ContactNo + "')";
 
      }
      else if(type=='student'){
        var sql = "INSERT INTO `student1`(`aId`,`fName`,`mName`,`lName`,`email`,`pw`,`rpw`, `addr1`,`addr2`,`addr3`,`phone`) VALUES ('" + aId + "','" + FirstName + "','" + MidName + "','" + LastName + "','" + EmailId + "','" + Password + "','" + RePassword + "','" + No + "','" + Street + "','" + City + "','" + ContactNo + "')";
 
      }
      else if(type=='teacher'){
        var sql = "INSERT INTO `teacher1`(`aId`,`fName`,`mName`,`lName`,`email`,`pw`,`rpw`, `addr1`,`addr2`,`addr3`,`phone`) VALUES ('" + aId + "','" + FirstName + "','" + MidName + "','" + LastName + "','" + EmailId + "','" + Password + "','" + RePassword + "','" + No + "','" + Street + "','" + City + "','" + ContactNo + "')";
 
      }
        
        
     //var sql = "INSERT INTO test (name) VALUES ('adda')";                                                                                     
       var query = connection.query(sql, function(err, result) {
            if (err){
             
                console.log("not found user");
                res.status(404);
                res.json(aId);
                //res.send(JSON.stringify({ a: 1 }));
    }
    else{
        res.status(200);
        res.json(aId);
    }
            
 });
 
    } else {
       console.log("method not allowed")
    }
 }