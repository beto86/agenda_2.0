import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  //token = 'Token 207a5650d20e22e32850c4c808dcc006f4003d07';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllEventos() : Observable<any> {
    return this.http.get(this.baseUrl + 'eventos/',
    {headers: this.httpHeaders});
  };

  getEvento(id: string) : Observable<any> {
    return this.http.get(this.baseUrl + 'eventos/' + id + '/',
    {headers: this.httpHeaders});
  };

}
