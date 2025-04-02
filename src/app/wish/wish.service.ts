import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { WishItem } from '../../shared/models/wishItems';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  // getWishes() {
  //   return this.http.get('assets/wishes.json');
  // }

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }


  getWishes() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
      format: 'json',
    }
    });

    // return this.http.get('assets/wishes1.json', options);

    // return this.http.get('assets/wishes1.json', options).pipe(
    //   catchError(error => {
    //     console.error('Error fetching wishes:', error);
    //     return throwError(() => new Error('Failed to fetch wishes'));
    //   })
    // );
    
    return this.http.get('assets/wishes.json', options).pipe(
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error("There is an error with the client or network: ", error.error);
    } else {
      console.error("server-side error: ", error);
    }

    return throwError(() => new Error("can't retrieve wishes"));
  };

  private addWish(wish: WishItem) {
    let options = this.getStandardOptions();

    options.headers = options.headers.set('Authorization', "value-needed-for-authorization");
    this.http.post('assets/wishes.json', wish, options);
    // this.http.post(url, body, options);
  }
}
