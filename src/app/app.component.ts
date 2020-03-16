import { Component } from '@angular/core';
import { AuthService  } from "../services/user/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project';

  private loggedIn: boolean;
  private auth: AuthService;

  constructor(auth: AuthService){
    this.auth = auth;
    this.loggedIn = true;
  }

  toggleLoggedIn(){
    this.loggedIn = !this.loggedIn;
  }
}
