import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from "./user.service";
import { ImageService } from "./image.service";
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

// 模拟（Mock）服务（内存Web API）来获取和保存数据
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent,
    DashboardComponent,
    UserSearchComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    // RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [UserService, ImageService], // 所有的服务必须在这里注册
  bootstrap: [AppComponent]
})
export class AppModule { }
