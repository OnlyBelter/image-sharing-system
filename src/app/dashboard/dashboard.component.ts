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
         .then(rep => this.users = this.getTopX(rep, 4));
        //  .then(rep => console.log(rep));
  }

  // 得到分享图片最多的前x个user
  getTopX(users: User[], x: number) {
    users.sort(function(a: User, b: User) {
        if (a.files.length > b.files.length) {
          return -1;
        }
        if (a.files.length < b.files.length) {
          return 1;
        }
        return 0;
    })
      console.log(users);
    return users.slice(0, x);
    };
}
