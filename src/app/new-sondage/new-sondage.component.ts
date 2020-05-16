import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DoodleService} from '../doodle.service';
import {Sondage} from '../sondage';

@Component({
  selector: 'app-new-sondage',
  templateUrl: './new-sondage.component.html',
  styleUrls: ['./new-sondage.component.css']
})
export class NewSondageComponent implements OnInit {
  sondage = new Sondage()
  id_user : number
  id_date : Date
  pause:boolean=false
  id_lieu : number
  constructor(private service: DoodleService) { }

  ngOnInit(): void {
  }

  createSondage() {
    this.service.createSondage(this.sondage, this.id_user, this.id_date);
  }

  addLieu() {
    this.service.addLieu(this.id_user, this.sondage.id, this.id_lieu);
  }

  addDate() {
    this.service.addDate(this.id_user, this.sondage.id, this.id_date);
  }
}
