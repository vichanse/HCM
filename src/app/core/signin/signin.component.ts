import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { AuthService, AuthQuery, Profile } from '../state';

@Component({
  selector: 'cm-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private sub: Subscription;
  public profile$: Observable<Profile>;

  constructor(
    private service: AuthService,
    private query: AuthQuery
  ) { }

  ngOnInit() {
    this.sub = this.service.sync().subscribe();
    this.profile$ = this.query.select('profile');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  signin() {
    this.service.signin('google');
  }

  signout() {
    this.service.signOut();
  }

  delete() {
    this.service.delete();
  }

}
