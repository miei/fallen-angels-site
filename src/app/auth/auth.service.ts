import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from '../shared/user-info.model';

import * as firebase from 'firebase';

const AUTH_SERVER = 'http://vps366286.ovh.net:5000';

@Injectable()
export class AuthService {
  user: Observable<UserInfo>;

  constructor(private http: Http) {
    this.user = new Observable(observer => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.getUserInfo(user.uid)
            .then(info => observer.next(info.val()))
            .catch(err => observer.error(err));
        } else {
          observer.next(null);
        }
      });
    });
  }

  // exchange our discord oauth code for a jwt
  getJWTAndSignIn(code) {
    this.http.get(AUTH_SERVER + '/auth/discord/callback?code=' + code)
      .subscribe(response => {
        if (response.status !== 200) {
          console.log('auth failed');
        }
        const json = response.json();
        firebase.auth().signInWithCustomToken(json.token)
          .catch(console.log);
      });
  }

  getUserInfo(uid) {
    return firebase.database()
      .ref('users/' + uid)
      .once('value');
  }

  isAuthenticated() {
    return !!firebase.auth().currentUser;
  }

  signOut() {
    return firebase.auth().signOut();
  }

  authLink() {
    return AUTH_SERVER + '/auth/discord';
  }
}
