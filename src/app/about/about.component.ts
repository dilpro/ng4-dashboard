import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from 'app/shared/models/user';

import { UserService } from 'app/shared/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users :User[];

  constructor(private service:UserService) { }

  ngOnInit() {
    this.service.getUsers()
    .subscribe(users => this.users = users);
  }

}
