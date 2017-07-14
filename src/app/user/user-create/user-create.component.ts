import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/models/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
user:User;

  constructor() {}

  ngOnInit() {
    this.user ={
      id:0,
      first_name:'',
      last_name:'',
      avatar:''
    };
  }

  get diagnostic(){
    return JSON.stringify(this.user);
  }

  procesForm(){
    console.log(this.user);
  }

}
