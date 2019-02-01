import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventPageComponent } from './event-page/event-page.component'

const routes: Routes = [
  { path: 'events-list', component: EventsListComponent },
  { path: '',   redirectTo: '/events-list', pathMatch: 'full' },
  { path: 'event-page/1', component: EventPageComponent },
  
];

@NgModule({
  
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
