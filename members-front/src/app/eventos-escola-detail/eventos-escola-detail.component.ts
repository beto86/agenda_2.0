import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-eventos-escola-detail',
  templateUrl: './eventos-escola-detail.component.html',
  styleUrls: ['./eventos-escola-detail.component.css']
})
export class EventosEscolaDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private api:ApiService, 
              private router: Router, 
              private appComponente: AppComponent
            ) { }

  selected_evento_escola = { titulo: '', materia: '', tipoEvento: '', peso: '', descricao: '', data_evento: '' };
  selected_id!: string | number;

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selected_id = id;
      this.loadEventoEscolar(id);
    }); 
  }


  loadEventoEscolar(id: string | number) {
    this.api.getEventoEscolar(id).subscribe(
      data => {
        this.selected_evento_escola = data;
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };

  update(){
    this.api.updateEventoEscolar(this.selected_evento_escola).subscribe(
      data => {
        this.selected_evento_escola = data;
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };

  delete(){
    this.api.deleteEventoEscolar(this.selected_id).subscribe(
      data => {
        let index;
        this.appComponente.eventos_escolar.forEach((e: { id: string | number; }, i: any) => {
          if(e.id == this.selected_id)
            index = i;
        });
        this.appComponente.eventos_escolar.splice(index, 1);
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };


  newEventoEscolar(){
    this.router.navigate(['new-evento-escola']);
  }

}
