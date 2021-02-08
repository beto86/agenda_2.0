import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  //token = 'Token 207a5650d20e22e32850c4c808dcc006f4003d07';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  saveNewMember(member) : Observable<any> {
    return this.http.post(this.baseUrl + 'members/', member,
    {headers: this.httpHeaders});
  };

}
