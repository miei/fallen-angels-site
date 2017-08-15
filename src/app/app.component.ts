import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router) {

  }

  getRouteURL() {
    return this.router.url;
  }

  ngOnInit() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDwHcAhFoV54ihJB4HszpX0ipo8ePsU3cA',
      authDomain: 'fallen-angels.firebaseapp.com',
      databaseURL: 'https://fallen-angels.firebaseio.com',
      projectId: 'fallen-angels',
      storageBucket: 'fallen-angels.appspot.com',
      messagingSenderId: '258266134931'
    };
    firebase.initializeApp(config);
  }
}
