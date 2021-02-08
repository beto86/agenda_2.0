import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-evento-escola',
  templateUrl: './new-evento-escola.component.html',
  styleUrls: ['./new-evento-escola.component.css']
})
export class NewEventoEscolaComponent{

  evento_escola = {titulo: '', materia: '', tipoEvento: '', peso: '', descricao: '', data_evento: ''};

  constructor(private api: ApiService, private apiComponent: AppComponent) { }



  save(){
    this.api.saveNewEventoEscolar(this.evento_escola).subscribe(
      data => {
        this.apiComponent.eventos_escolar.push(data);
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  }
}
