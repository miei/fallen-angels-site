import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
<app-navbar></app-navbar>
<div class="container">
  <router-outlet></router-outlet>
</div>`
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
