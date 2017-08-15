import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { CallbackComponent } from './callback.component';
import { AuthService } from './auth.service';

@NgModule({
  providers: [
    AuthService
  ],
  imports: [
    CommonModule,
    HttpModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    CallbackComponent
  ],
  exports: [
    AuthRoutingModule
  ]
})
export class AuthModule { }
