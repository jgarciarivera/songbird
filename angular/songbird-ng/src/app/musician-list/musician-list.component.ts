import { Component, Input } from '@angular/core';
import { Person } from '../Person';
import { dummyMusicians } from '../musicians'

@Component({
  selector: 'app-musician-list',
  templateUrl: './musician-list.component.html',
  styleUrls: ['./musician-list.component.css']
})
export class MusicianListComponent {
  joinName: string = "";
  joinInstrument: string = "";
  joinLevel: string = "";
  @Input() modalVisible: Boolean;
  @Input() joinOnName: string;
  @Input() joinOnInstrument: string;
  @Input() joinOnLevel: string;
  
  musicians: Person[] = dummyMusicians;
  
  toggleVisible() {
    this.modalVisible = !this.modalVisible;
  }

  addMusician(m: Person) {
      this.musicians.push({ name: this.joinName, instrument: this.joinInstrument, expertise: this.joinLevel });
      this.toggleVisible();
    }
}

