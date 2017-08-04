import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import { User } from '../user';
import { UserService } from '../user.service';
import { ImageService } from '../image.service';
import { Image } from '../image';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {
  @Input() user: User;
  images: Object = {};
  constructor(
    private userService: UserService,
    private imageService: ImageService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    console.log(route);
   }
  
  // 在ngOnInit()生命周期钩子中，我们从ActivatedRoute服务的可观察对象params中提取id参数， 
  // 并且使用userService来获取具有这个id的用户数据
  // user的id是数字，而路由参数的值总是字符串。 所以我们需要通过 JavaScript 的 (+) 操作符把路由参数的值转成数字。
  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.userService.getUserByHttp(+params['id']))
        .subscribe(rep => this.user = rep);

    setTimeout(() => {
      console.log(this.user);
      if (this.user.files) {
        this.user.files.forEach(ele => this.getImage(ele).then(res => {
          console.log(res);
          let imgId = res.id;
          this.images[res.id] = res.fileUrl;
        }));
        
      }
      console.log('images');
      console.log(this.images);
      console.log('lslsl');
    
    }, 1000);
    if (this.user) {
      console.log(this.user);
      console.log('love');
    }
    console.log('you');
  }

  goBack(): void {
    console.log(this.location);
    // 回退太多步会跑出我们的应用。 在真实的应用中，我们需要使用CanDeactivate守卫对此进行防范。
    this.location.back();
  }

  save(): void {
    this.userService.update(this.user)
        .then(() => this.goBack());
  }

  getImage(id: number): Promise<Image> {
    console.log(id);
    return this.imageService.getImageById(id);
  }

  test2(): User {
    return this.user;
  }



  


}
