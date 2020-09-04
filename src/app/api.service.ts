import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpClientModule,
} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Vehicle } from './models/vehicle';

// Refer to https://bit.ly/3jHzAQX to get your api key from fleetio!
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'your api token from fleetio',
    'Account-Token': 'your account token from fleetio',
  }),
};

const apiUrl = 'https://secure.fleetio.com/api/v1/';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operations = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(apiUrl + 'vehicles', httpOptions).pipe(
      tap((vehicles) => console.log('Fetched vehicless')),
      catchError(this.handleError('getvehicless', []))
    );
  }
}
