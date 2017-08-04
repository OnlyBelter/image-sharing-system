import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailComponent } from '../user-detail/user-detail.component';
// import { UserService } from "../user.service";
import { UsersComponent } from '../users/users.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


const appRoutes: Routes = [
  // Component: 导航到此路由时，路由器需要创建的组件（HeroesComponent）
  { path: 'users', component: UsersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard' , pathMatch: 'full' },
  { path: 'detail/:id', component: UserDetailComponent}, // 带参数的路由

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  // 把RouterModule添加到路由模块的exports中，
  // 以便关联模块（比如AppModule）中的组件可以访问路由模块中的声明，比如RouterLink 和 RouterOutlet。
  exports: [RouterModule],
  // declarations: []  // 无declarations！声明是关联模块的任务。
})
export class AppRoutingModule { }
