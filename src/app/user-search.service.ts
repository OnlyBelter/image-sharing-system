import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserSearchService {

  constructor(private http: Http) { }
 
  search(term: string): Observable<User[]> {
    return this.http
              .get(`api/users/?name=${term}`)  // 查询字符串
              .map(res => res.json().data as User[]);  // 链式RxJS操作可以让我们简单、易读的处理响应数据
  }
}
