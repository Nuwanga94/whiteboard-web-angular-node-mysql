import { Component, OnInit } from '@angular/core';

//import { Component } from '@angular/core';
import { User } from './user';
import{ EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

//export class AppComponent {
  types=['Student', 'Teacher', 'Admin'];
  typeHasError = true;
  submitted = false;
  errorMsg= '';

  emailPattern= "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
//    e = document.getElementById("ddlViewBy");
// strUser = this.e.options[this.e.selectedIndex].value;

userModel= new User( '','','' ,  '' , '', '', true );
//user= new User('default', '','','' ,  '' , '', '', false);
constructor(private _enrollmentService: EnrollmentService){}

validateTopic(value){
  if (value === 'default'){
    this.typeHasError = true;

  }else{
    this.typeHasError = false;
  }
}

onSubmit(){
  
 
  //this.submitted = true;
if(this.userModel.pw==this.userModel.rpw){
  this._enrollmentService.enroll(this.userModel)
  .subscribe(
    resp => {
      console.log('Success!', resp)

      window.location.href = "./"; 

},


error=> {
this.errorMsg = error.statusText;
console.log('Error!', this.errorMsg);
}
)
}else{
  alert("Password mismatched!");

}
  
}

}
