import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  // getWishes() {
  //   return this.http.get('assets/wishes.json');
  // }
  getWishes() {
    return this.http.get('assets/wishes.json').pipe(
      catchError(error => {
        console.error('Error fetching wishes:', error);
        return throwError(() => new Error('Failed to fetch wishes'));
      })
    );
  }
}
