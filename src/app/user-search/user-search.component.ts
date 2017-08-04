import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { UserSearchService } from '../user-search.service';
import { User } from '../user';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [UserSearchService]
})
export class UserSearchComponent implements OnInit {
  users: Observable<User[]>;
  // A Subject is like an Observable, but can multicast to many Observers. 
  // Subject（主题）是一个可观察的事件流中的生产者。
  // searchTerms生成一个产生字符串的Observable，用作按名称搜索时的过滤条件。
  private searchTerms = new Subject<string>();

  constructor(
    private userSearchService: UserSearchService,
    private router: Router
  ) { }

  // Push a search term into the observable stream.
  // 每当调用search()时都会调用next()来把新的字符串放进该主题的可观察流中。
  search(term: string): void {
    this.searchTerms.next(term);
    // console.log(this.searchTerms.toPromise().then(res => console.log(res)));
  }

  ngOnInit() {
    // Subject也是一个Observable对象。 我们要把搜索词的流转换成Hero数组的流，并把结果赋值给heroes属性。
    this.users = this.searchTerms
                    .debounceTime(300)  // 在传出最终字符串之前，debounceTime(300)将会等待，直到新增字符串的事件暂停了 300 毫秒。
                    .distinctUntilChanged()  // 确保只在过滤条件变化时才发送请求， 这样就不会重复请求同一个搜索词了。
                    .switchMap(term => term // 为每个从debounce和distinctUntilChanged中通过的搜索词调用搜索服务。 它会取消并丢弃以前的搜索可观察对象，只保留最近的。
                       ? this.userSearchService.search(term)
                       : Observable.of<User[]>([]))
                    .catch(error => {
                      console.log(error);
                      return Observable.of<User[]>([]);
                    });

  }

  gotoDetail(user: User): void {
    let link = ['/detail', user.id];
    this.router.navigate(link);
  }
  
}
