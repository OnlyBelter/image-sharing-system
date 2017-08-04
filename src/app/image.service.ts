import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

// import { USERS } from './mock-users';
import { Image } from "./image";
import { User } from './user';

@Injectable()
export class ImageService {

  private imageUrl = 'api/images';
  constructor(private http: Http) { }

  getImageById(id: number): Promise<Image> {
    const url = `${this.imageUrl}/${id}`;
    console.log(url);
    return this.http.get(url)
                    .toPromise()
                    .then(res => res.json().data as Image)
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
