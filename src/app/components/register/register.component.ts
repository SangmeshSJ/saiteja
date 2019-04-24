import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../UserService/user-service.service';
import { User } from 'src/app/model/user-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  user: User[]
  message: string;
  flag: boolean
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserServiceService) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.userService.getUser().subscribe(data => {this.user = data})

  }
  onSubmit(psw) {
    this.submitted = true

    if (this.regForm.invalid) {
      return
    }
    this.flag = false
    let usrCheck = false
    if (this.regForm.value.password == psw) {
        for (var use of this.user) {
          if (this.regForm.value.email == use.email) {
            alert("User exists ..!\nPlease Log in")
            this.router.navigate(['login'])
            usrCheck = true
            break
          }
        }


        if (usrCheck == false) {
          this.userService.regdataAdd(this.regForm.value)
            .subscribe(data => { alert("Successfully Registered") })
          this.flag = true
          this.router.navigate(['login'])
        }

      

    }
    else {
      this.message = "Password not matching..!\nPlease confirm  password"
      console.log(this.message)
    }
  }
}
