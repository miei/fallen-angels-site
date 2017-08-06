import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { InfoComponent } from './pages/info/info.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { RostersComponent } from './pages/rosters/rosters.component';
import { GalleriesComponent } from './pages/galleries/galleries.component';
import { EventsComponent } from './pages/events/events.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NavLinksService } from './shared/nav-links.service';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InfoComponent,
    ResourcesComponent,
    RostersComponent,
    GalleriesComponent,
    EventsComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [NavLinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
