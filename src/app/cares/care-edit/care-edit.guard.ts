import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate
} from '@angular/router';
import { Observable } from 'rxjs';
import { CareEditComponent } from './care-edit.component';

@Injectable({
  providedIn: 'root'
})
export class CareEditGuard implements CanDeactivate<CareEditComponent> {
  canDeactivate(component: CareEditComponent): Observable<boolean> | Promise<boolean> | boolean {
    if (component.careForm.dirty) {
      return confirm('You have unsaved changes! If you leave, your changes will be lost.');
    }
    return true;
  }
}
