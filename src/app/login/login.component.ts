import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public status: any = {};
  public user: any = {};
  public email: any;


  constructor() { }

  ngOnInit() {
    console.log('login component initialized');
  }

  login() {
    console.log("login", this.user);

    // this._accountService.login(this.user).subscribe((res: any) => {
    //   //this._accountService.emitResponse(res);
    //   this._router.navigate(['/dashboard']);
    //
    // },(error: any) => {
    //   console.log(error);
    //   this.status.code = 'error';
    //   this.status.message = JSON.parse(error._body).message;
    // });
  }

}
