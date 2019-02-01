import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  @Input() id: number;
  @Input() name: string = "";
  @Input() date: string = "";
  @Input() time: string = "";
  @Input() genre: string = "";
  @Input() address: string = "";
  
  foo() {
    return "/event-page/" + this.id; 
  }

}
