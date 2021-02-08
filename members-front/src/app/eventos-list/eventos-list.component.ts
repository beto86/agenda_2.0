import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css']
})
export class EventosListComponent implements OnInit {

  eventos = [
    {titulo: 'titulo 01', id: 1, descricao: "Ciclano", data_evento: '2020-12-17T07:40:19Z'},
    {titulo: 'titulo 02', id: 2, descricao: "Fulano", data_evento: '2020-12-17T07:40:19Z'},
    {titulo: 'titulo 03', id: 3, descricao: "Beltrano", data_evento: '2020-12-17T07:40:19Z'},
  ];

  constructor(private api:ApiService, private router: Router) {
    this.getEventos();
   }
  ngOnInit(): void {
  }

  

  getEventos = () => {
    this.api.getAllEventos().subscribe(
      data => {
        this.eventos = data
        console.log(data);
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };

  eventoClicked = (evento: { id: any; }) => {
    this.router.navigate(['eventos-detail', evento.id])
  };

}
