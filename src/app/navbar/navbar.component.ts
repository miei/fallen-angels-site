import { Component, OnInit, Input } from '@angular/core';
import { NavLinksService } from '../shared/nav-links.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links = [];
  userInfo;

  constructor(private navLinksService: NavLinksService, public authService: AuthService) {
    this.links = navLinksService.links;
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      console.log(user);
      this.userInfo = user;
    });
  }

}
