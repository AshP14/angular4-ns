import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public status: any = {};
  public user: any = {};
  public email: any;


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
                // const csrfToken = xhr.getResponseHeader('netsense-csrf-token');
                  this.router.navigate(['/accounts']);
            },
            (error) => {
              console.log(error);
                  // this.status.code = 'error';
                  // this.status.message = JSON.parse(error._body).message;
            }
    );
  }

}
