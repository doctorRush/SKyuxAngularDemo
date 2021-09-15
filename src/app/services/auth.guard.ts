import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    
  ) {}

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    let isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    let isLoggedIn$: Observable<boolean> = isLoggedIn.asObservable();
    var person = prompt("Please enter your Type for Authentication", "");
    if(person.toLowerCase() == 'signed'){
        isLoggedIn.next(true);
    } else{
        alert("Sorry you can't login");
    }
    return isLoggedIn$;
  }
}
