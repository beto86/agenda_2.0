import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-evento',
  templateUrl: './new-evento.component.html',
  styleUrls: ['./new-evento.component.css']
})
export class NewEventoComponent implements OnInit {

  evento = {titulo: '', descricao: '', data_evento: ''};

  constructor(private api: ApiService, private apiComponent: AppComponent) { }

  ngOnInit() {
  }

  save(){
    this.api.saveNewEvento(this.evento).subscribe(
      data => {
        this.apiComponent.eventos.push(data);
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  }

}
