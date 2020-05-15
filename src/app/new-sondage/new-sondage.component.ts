import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-sondage',
  templateUrl: './new-sondage.component.html',
  styleUrls: ['./new-sondage.component.css']
})
export class NewSondageComponent implements OnInit {

  pause : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
