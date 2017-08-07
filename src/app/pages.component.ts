import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
<app-navbar></app-navbar>
<div class="container">
  <router-outlet></router-outlet>
</div>`
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
