import { Component, OnInit } from '@angular/core';
import { NavLinksService } from '../shared/nav-links.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  links = [];

  constructor(private navLinksService: NavLinksService) {
    this.links = navLinksService.links;
  }

  ngOnInit() {
  }

}
