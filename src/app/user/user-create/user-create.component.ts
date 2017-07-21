import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/models/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User;
  submitted: boolean = false; //check if the form is submitted

  constructor() { }

  ngOnInit() {
    this.user = {
      id: 0,
      first_name: '',
      last_name: '',
      avatar: ''
    };
  }

  get diagnostic() {
    return JSON.stringify(this.user);
  }

  processForm(): void {
    console.log(this.user);
    this.submitted = true;
  }

  //Create User
  //this.service.createUser(this.user);
}
