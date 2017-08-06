import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { InfoComponent } from './pages/info/info.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { RostersComponent } from './pages/rosters/rosters.component';
import { GalleriesComponent } from './pages/galleries/galleries.component';
import { EventsComponent } from './pages/events/events.component';
import { MainComponent } from './main.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: '', component: MainComponent, children: [
    { path: 'info', component:  InfoComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'rosters', component: RostersComponent },
    { path: 'galleries', component: GalleriesComponent },
    { path: 'events', component: EventsComponent },
  ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
