import { Injectable } from '@angular/core';
import { ICare } from './care';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CareService {
    private careUrl = 'api/cares/cares.json';

    constructor(private http: HttpClient) {
        
    }

    getCares(): Observable<ICare[]> {
        return this.http.get<ICare[]>(this.careUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getCare(id: number): Observable<ICare | undefined> {
      return this.getCares()
        .pipe(
          map((cares: ICare[]) => cares.find(care => care.id === id))
        );
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
}