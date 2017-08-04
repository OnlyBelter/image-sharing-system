import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";


// 有很多像toPromise这样的操作符，用于扩展Observable，为其添加有用的能力
import 'rxjs/add/operator/toPromise';

import { USERS } from './mock-users';
import { User } from "./user";


// 使用单独的服务可以保持组件精简，
// 使其集中精力为视图提供支持，并且，借助模拟（Mock）服务，可以更容易的对组件进行单元测试。
// 数据服务总是异步的
// 当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。 
// 如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。
@Injectable()
export class UserService {

  private usersUrl = 'api/users';
  constructor(private http: Http) { }
  
  //UserService暴露了getUsers方法，返回跟以前一样的模拟数据，但它的消费者不需要知道这一点
  //服务是一个分离关注点，建议你把代码放到它自己的文件里
  getUsers(): Promise<User[]> {
    // return USERS;
    return Promise.resolve(USERS); // 返回承诺形式
  }

  getUsersSlowly(): Promise<User[]> {
    return new Promise(resolve => setTimeout(() => resolve(USERS), 6000));
  }

  getUser(id: number): Promise<User> {
    return this.getUsers()
               .then(rep => rep.find(user => user.id === id));
  }

  //Angular 的http.get返回一个 RxJS 的Observable对象
  getUsersByHttp(): Promise<User[]> {
    return this.http.get(this.usersUrl)
               .toPromise()
               .then(res => res.json().data as User[])
               .catch(this.handleError);
  }
  
  // 来发起一个 get-by-id 请求
  getUserByHttp(id: number): Promise<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
                .toPromise()
                .then(res => res.json().data as User)
                .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  // 使用 HTTP 的 put() 方法来把修改持久化到服务端
  update(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.put(url, JSON.stringify(user), {headers: this.headers})
                    .toPromise()
                    .then(() => user)  // ()
                    .catch(this.handleError);
  }

  create(name: string): Promise<User> {
    return this.http
            .post(this.usersUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            // 下面的.then方法对默认返回的数据进行了加工，得到了一个完整的User对象
            .then(res => res.json().data as User)  
            .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)  // 什么也不返回
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
}
