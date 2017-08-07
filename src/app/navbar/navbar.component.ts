import { Component, OnInit, Input } from '@angular/core';
import { NavLinksService } from '../shared/nav-links.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links = [];

  constructor(private navLinksService: NavLinksService) {
    this.links = navLinksService.links;
  }

  ngOnInit() {
  }

}
