import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MusicianListComponent } from "./musician-list/musician-list.component";
import { EventPageComponent } from './event-page/event-page.component';
import { CommentsComponent } from './comments/comments.component';
import { EventsListComponent } from './events-list/events-list.component';
import { MusicianComponent } from './musician/musician.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicianListComponent,
    EventPageComponent,
    CommentsComponent,
    EventsListComponent,
    MusicianComponent,
    CommentsListComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
