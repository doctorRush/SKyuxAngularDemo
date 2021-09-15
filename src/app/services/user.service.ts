import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users/user';

export interface UserInterface{
  getAllUsers:()=>Observable<User[]>;
  updateUser:(id:number,emp:User)=>Observable<User>;
  deleteUser:(id:number)=>any;
}

export const USER_SERVICE = new InjectionToken<UserInterface>(
  'UserService'
);

@Injectable()
export class UserService implements UserInterface{
  private configUrl = 'http://localhost:3000/users';
  constructor(private httpService: HttpClient) {}

  // Service method to get all User records
  getAllUsers(): Observable<User[]> {
    return this.httpService.get<User[]>(this.configUrl);
  }

 
  //  To update the existing employee
  updateUser(id: number, employee: User):Observable<User> {
    return this.httpService.put<User>(this.configUrl + '/' + id, employee);
  }

  //  Service method to delete the user record
  deleteUser(id: number) {
    return this.httpService.delete(this.configUrl + '/' + id);
  }
}