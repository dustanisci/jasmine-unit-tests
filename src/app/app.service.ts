import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private headers: HttpHeaders = new HttpHeaders().append('Content-Type', 'application/json');
  private request: HttpParams = new HttpParams();

  constructor(private http: HttpClient) { }

  public data(): Observable<object> {
    return this.http.get<any>(
      'https://www.mocky.io/v2/5e3434273000008245d9637d',
      { headers: this.headers, params: this.request }
    );
  }
}
