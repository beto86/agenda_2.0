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

  getAllEventosEscolar() : Observable<any> {
    return this.http.get(this.baseUrl + 'eventos_escolar/',
    {headers: this.httpHeaders});
  };

  getEventoEscolar(id: string) : Observable<any> {
    return this.http.get(this.baseUrl + 'eventos_escolar/' + id + '/',
    {headers: this.httpHeaders});
  };
}
