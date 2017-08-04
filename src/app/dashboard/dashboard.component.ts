import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsersByHttp()
         .then(rep => this.users = rep.slice(1, 5));
  }

}
