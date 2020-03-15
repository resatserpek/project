import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authError: any;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')    
  });
  
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data =>{
      this.authError = data;
    })
  }

  login(user){
    this.auth.login(user.value.email, user.value.password);
  }
}
