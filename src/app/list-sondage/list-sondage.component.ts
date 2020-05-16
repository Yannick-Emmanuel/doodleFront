import { Component, OnInit } from '@angular/core';
import { DoodleService } from '../doodle.service';

@Component({
  selector: 'app-list-sondage',
  templateUrl: './list-sondage.component.html',
  styleUrls: ['./list-sondage.component.css']
})
export class ListSondageComponent implements OnInit {

  id_user : number
  constructor(private service: DoodleService) { }

  ngOnInit(): void {
  }

  getSondage() {
    this.service.getSondage(this.id_user)
  }

}
