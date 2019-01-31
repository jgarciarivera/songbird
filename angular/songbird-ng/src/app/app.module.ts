import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MusicianListComponent } from "./musician-list/musician-list.component";
import { EventPageComponent } from './event-page/event-page.component';
import { CommentsComponent } from './comments/comments.component';
import { EventsListComponent } from './events-list/events-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicianListComponent,
    EventPageComponent,
    CommentsComponent,
    EventsListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
