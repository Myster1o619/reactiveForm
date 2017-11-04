import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({ 
    username : new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace],
      UsernameValidators.shouldBeUnique,
    ),
    password : new FormControl('', Validators.required), 
  });

  loginError : boolean = false;

  login() {
    if (this.form.valid) {
      console.log("logging into application")    
    } else if (!this.form.valid) {
      this.form.setErrors({ 
        loginError : true
      });     
      }  
    }
  //   this.form.setErrors({ 
  //     loginError : true
  //   });
  // }

    
  
  get username() {
     return this.form.get("username");
     /*
        then in HTML template:
        <div *ngIf="username.touched && username.invalid"
        class="alert alert-danger">
        Username is Required
        </div>

        NOT USING THIS FOR NOW, DON'T REALLY UNDERSTAND WHAT IS HAPPENING
     */
  }

}
