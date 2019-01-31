import { Component, Input } from '@angular/core';
import { Event } from '../Event'
import { dummyEvents } from '../events';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent{
  @Input() joinSessionName: string = "";
  @Input() joinDate: string = "";
  @Input() joinTime: string = "";
  @Input() joinGenre: string = "";
  @Input() joinAddress: string = "";
  @Input() modalVisible: Boolean = false;
  
  toggleVisible() {
    this.modalVisible = !this.modalVisible;
  }
  events: Event[] = dummyEvents;

  addSession(m: Event) {
    this.events.push({ name: this.joinSessionName, date: this.joinDate, time: this.joinTime, genre: this.joinGenre, address: this.joinAddress });
  }
}
