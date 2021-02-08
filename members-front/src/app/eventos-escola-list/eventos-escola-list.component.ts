import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-eventos-escola-list',
  templateUrl: './eventos-escola-list.component.html',
  styleUrls: ['./eventos-escola-list.component.css']
})
export class EventosEscolaListComponent {

  eventos_escolar = [
    {titulo: 'titulo 01', id: 1, materia: 'materia 1', tipo_evento: 'tipo 1', peso: 0, descricao: "Ciclano", data_evento: '2020-12-17T07:40:19Z'},
    {titulo: 'titulo 02', id: 2, materia: 'materia 2', tipo_evento: 'tipo 2', peso: 0, descricao: "Fulano", data_evento: '2020-12-17T07:40:19Z'},
    {titulo: 'titulo 03', id: 3, materia: 'materia 3', tipo_evento: 'tipo 3', peso: 0, descricao: "Beltrano", data_evento: '2020-12-17T07:40:19Z'},
  ];

  constructor(private api:ApiService, private router: Router) {
    this.getEventosEscolar();
   }

  

  getEventosEscolar = () => {
    this.api.getAllEventosEscolar().subscribe(
      data => {
        this.eventos_escolar = data
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };

  eventosEscolarClicked = (evento_escola: { id: any; }) => {
    this.router.navigate(['eventos-escola-detail', evento_escola.id])
  };

}
