import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LogoutService} from './logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private logoutService: LogoutService,
              private router: Router ) {}

  ngOnInit() {
     console.log('logou component initialized');
  }

    logout() {

    this.logoutService.userLogout().subscribe(
            (response) => {
                console.log(response);
                //let csrfToken = response.headers.getAll('netsense-csrf-token');
                //console.log(csrfToken);
                localStorage.removeItem('csrfToken');
                this.router.navigate(['/']);
            },
            (error) => {
              console.log(error);
                  // this.status.code = 'error';
                  // this.status.message = JSON.parse(error._body).message;
            }
    );
  }
}
