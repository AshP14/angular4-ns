import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public status: any = {};
  public user: any = {};
  public email: any;
  public validationError: boolean = false;


  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    console.log('login component initialized');
  }

  login() {
    console.log( 'user', this.user);
    this.loginService.userLogin(this.user).subscribe(
            (response) => {
                console.log(response);
                let csrfToken = response.headers.getAll('netsense-csrf-token');
                console.log(csrfToken);
                localStorage.setItem('csrfToken', csrfToken[0]);
                this.router.navigate(['/accounts']);
            },
            (error) => {
              console.log(error);
              this.validationError = true;
                  // this.status.code = 'error';
                  // this.status.message = JSON.parse(error._body).message;
            }
    );
  }

}
