import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getEvento(id: string) : Observable<any> {
    return this.http.get(this.baseUrl + 'eventos/' + id + '/',
    {headers: this.httpHeaders});
  };

  updateEvento(evento: { titulo: any; descricao: any; data_evento: any; id?: any; }) : Observable<any> {
    let body = { titulo: evento.titulo, descricao: evento.descricao, data_evento: evento.data_evento }
    return this.http.put(this.baseUrl + 'eventos/' + evento.id + '/', body,
    {headers: this.httpHeaders});
  };


  deleteEvento(id: string) : Observable<any> {
    return this.http.delete(this.baseUrl + 'eventos/' + id + '/',
    {headers: this.httpHeaders});
  };

}


