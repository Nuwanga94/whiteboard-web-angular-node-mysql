
const connection = require('../db-con');
exports.profile = function profile(req, res){

    // var userId = req.session.userId;
    // if(userId == null){
    //    res.redirect("/login");
    //    return;
    // }
 
    var sql="SELECT * FROM `student`";          
    connection.query(sql, function(err, result){  
        res.json(result);

    });
 }