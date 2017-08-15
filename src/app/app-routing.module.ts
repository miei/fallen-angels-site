import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { InfoComponent } from './info/info.component';
import { ResourcesComponent } from './resources/resources.component';
import { RostersComponent } from './rosters/rosters.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { EventsComponent } from './events/events.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'info', component:  InfoComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'rosters', component: RostersComponent },
  { path: 'galleries', component: GalleriesComponent },
  { path: 'events', component: EventsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
