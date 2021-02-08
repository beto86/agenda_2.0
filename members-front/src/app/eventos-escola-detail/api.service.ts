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

  getEventoEscolar(id: string) : Observable<any> {
    return this.http.get(this.baseUrl + 'eventos_escolar/' + id + '/',
    {headers: this.httpHeaders});
  };

  updateEventoEscolar(evento_escola: { titulo: any; materia: any; tipoEvento: any; peso: any; descricao: any; data_evento: any; id?: any; }) : Observable<any> {
    let body = { titulo: evento_escola.titulo, 
                  materia: evento_escola.materia, 
                  tipoEvento: evento_escola.tipoEvento,
                  peso: evento_escola.peso, 
                  descricao: evento_escola.descricao, 
                  data_evento: evento_escola.data_evento 
                }
    return this.http.put(this.baseUrl + 'eventos_escolar/' + evento_escola.id + '/', body,
    {headers: this.httpHeaders});
  };


  deleteEventoEscolar(id: string) : Observable<any> {
    return this.http.delete(this.baseUrl + 'eventos_escolar/' + id + '/',
    {headers: this.httpHeaders});
  };
}
