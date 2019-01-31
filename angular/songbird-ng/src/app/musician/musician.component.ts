import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-musician',
  templateUrl: './musician.component.html',
  styleUrls: ['./musician.component.css']
})
export class MusicianComponent implements OnInit {
  @Input() name: string = "";
  @Input() instrument: string = "";
  @Input() expertise: string= "";
  
  constructor() { }

  ngOnInit() {
  }

}
