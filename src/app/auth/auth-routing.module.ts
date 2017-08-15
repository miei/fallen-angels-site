import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { CallbackComponent } from './callback.component';

const authRoutes: Routes = [
  { path: 'auth', component: AuthComponent, pathMatch: 'full' },
  { path: 'auth/callback', component: CallbackComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
