import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { NavLinksService } from './shared/nav-links.service';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { EventsComponent } from './events/events.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { InfoComponent } from './info/info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResourcesComponent } from './resources/resources.component';
import { RostersComponent } from './rosters/rosters.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    EventsComponent,
    GalleriesComponent,
    InfoComponent,
    NavbarComponent,
    ResourcesComponent,
    RostersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    TooltipModule.forRoot()
  ],
  providers: [NavLinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
