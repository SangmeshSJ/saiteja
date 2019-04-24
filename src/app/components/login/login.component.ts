import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user-model';
import { UserServiceService } from 'src/app/UserService/user-service.service';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  user: User[]

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.userService.getUser().subscribe(data => { this.user = data; })
  }


  onSubmit() {
    this.submitted = true

    if (this.loginForm.invalid) {
      return
    }
    else {
      let email = this.loginForm.controls.email.value
      let password = this.loginForm.controls.password.value

      localStorage.setItem("email", email)
    
      for (let a of this.user) {
        if (a.email == email) {
          if (a.password == password){
                        alert(`welcome ${email}` )
            localStorage.setItem("loggedUserId",a.id.toString())
            localStorage.setItem("loggedUserName",a.firstName)

            this.router.navigate(['chat'])

          }
        }
      }
    }
  }
}
