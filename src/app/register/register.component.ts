import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/user/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    location: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  authError: any;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    })
  }

  createUser(userRegForm){

    this.auth.createUser(userRegForm);
  }
}
