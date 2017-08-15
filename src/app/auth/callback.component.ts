import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-callback',
  template: '',
  styles: []
})
export class CallbackComponent implements OnInit {
  code = '';

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    const code = this.code = this.route.snapshot.queryParams.code;
    this.authService.getJWTAndSignIn(code);
  }

}
