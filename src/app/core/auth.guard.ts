import { AuthQuery } from './state/auth.query';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private query: AuthQuery, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.query.select('profile').pipe(map(profile => {
        if(!profile) {
          alert('You need to login to view this content!')
          this.router.navigate(['/']);
          return false
        }
        return true;
      }), take(1));
  }
  
}
