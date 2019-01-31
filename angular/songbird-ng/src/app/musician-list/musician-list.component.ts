import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musician-list',
  templateUrl: './musician-list.component.html',
  styleUrls: ['./musician-list.component.css']
})
export class MusicianListComponent implements OnInit {
  joinName: string;
  modalVisible: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  
  toggleVisible () {
    this.modalVisible = !this.modalVisible;
  }

  addMusician () {
    this.joinName = (<HTMLInputElement>event.target).value;
  }
}
