import { AfterContentInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ages: number[] = [];
  initialFormState:any={};
  users: any[] = [];
  selectedAge!: number;
  disabled: boolean = true;
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    ID: new FormControl('',
      [
        Validators.required,
        Validators.minLength(13)
      ]),
    mobile: new FormControl('',
      [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
      ]),
    gender: new FormControl('', [Validators.required]),
    age: new FormControl('',
      [
        Validators.required,
        Validators.pattern("^[0-9][0-9]$")
      ]
    ),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    consent: new FormControl('', [Validators.requiredTrue])

  })
  constructor(private router:Router){

  }



  ngOnInit(): void {
    
    if (localStorage.getItem("userData")) {
      let item = JSON.parse(localStorage.getItem("userData")!);
      this.users = item;
    }

    for (var i = 18; i <= 60; i++)
      this.ages.push(i);
  }
 
  onSubmit() {
    console.log("form value", JSON.stringify(this.registerForm.value));
    this.users.push(this.registerForm.value);
    localStorage.setItem("userData", JSON.stringify(this.users));

  }
  deleteUser(user:any){
    debugger;
    let response=confirm("Do you really want to delete ? ");
    if(response){
      console.log("users",this.users);
         let index=this.users.indexOf(user);
         console.log(index);
         this.users.splice(index,1);
         console.log("users after delete",this.users);
         localStorage.setItem("userData", JSON.stringify(this.users));
    }
  }
  editUser(user:any){
   this.router.navigate(['user/'+user.ID]);
  }
  resetForm(){
    this.registerForm.reset(this.initialFormState);
   
    
  }


}


