import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { User } from 'app/shared/models/user';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  private userUrl : string = 'https://reqres.in/api/users';
  constructor(private http:Http) {

   }

  /**
   * Get all Users
   */
  getUsers():Observable<User[]>{
    return this.http.get(this.userUrl)
    .map(res=>res.json().data)
    .catch(this.handleError);
  }

  /**
   * Get a singlr user
   */
  getUser(){
    this.http.get('www.api.com')
    .map(res=>res.json())
    .catch(this.handleError);
  }

  //Insert a user

  //Update a user

  //Delete a user

  /**
   * Handle any error from the api
   */
  private handleError(err){
    let errorMessage:string;

      if (err instanceof Response) {
        let body = err.json()||'';
        let error = body.error||JSON.stringify(body);
        errorMessage = `${err.status}-${err.statusText}||''} ${error}`
      }
      else{
        errorMessage = err.message?err.message:err.toStrng();
      }

      return Observable.throw(errorMessage);
  }
}
