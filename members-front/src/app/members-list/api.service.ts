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

  getAllMembers() : Observable<any> {
    return this.http.get(this.baseUrl + 'members/',
    {headers: this.httpHeaders});
  };

  getMember(id: string) : Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  };
  
  //saveNewMember(member) : Observable<any> {
  //  return this.http.post(this.baseUrl + 'members/', member,
  //  {headers: this.httpHeaders});
  //};

  saveNewEvento(evento: any) : Observable<any> {
    return this.http.post(this.baseUrl + 'eventos/', evento,
    {headers: this.httpHeaders});
  };
}
