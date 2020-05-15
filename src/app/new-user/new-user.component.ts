import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../user';
import {DoodleService} from '../doodle.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  utilisateur=new User()
  hide = true; //cache le mot de passe
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private service: DoodleService) { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  createUser(){

  }

}
