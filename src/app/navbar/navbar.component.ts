import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NavLinksService } from '../shared/nav-links.service';
import { AuthService } from '../auth/auth.service';
import { UserInfo } from '../shared/user-info.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  links = [];
  userInfo: UserInfo;
  userInfoSubscription;

  constructor(private navLinksService: NavLinksService, public authService: AuthService) {
    this.links = navLinksService.links;
  }

  ngOnInit() {
    this.userInfoSubscription = this.authService.user.subscribe(user => {
      console.log(user);
      this.userInfo = user;
    });
  }

  ngOnDestroy() {
    if (this.userInfoSubscription) {
      this.userInfoSubscription.unsubscribe();
    }
  }
}
