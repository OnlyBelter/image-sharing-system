import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  // moduleId: module.id, // 启用相对于模块的文件URL
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'Image Sharing System';
  constructor() { }

  ngOnInit() {
  }

}