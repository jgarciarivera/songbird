import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-musician-list',
  templateUrl: './musician-list.component.html',
  styleUrls: ['./musician-list.component.css']
})
export class MusicianListComponent {
  joinName: string;
  @Input() modalVisible: Boolean;
  
  toggleVisible() {
    this.modalVisible = !this.modalVisible;
  }

  addMusician() {
    
  }
}
