
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApiService } from './api.service';


@Component({
  selector: 'app-eventos-detail',
  templateUrl: './eventos-detail.component.html',
  styleUrls: ['./eventos-detail.component.css']
})
export class EventosDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private api:ApiService, 
              private router: Router, 
              private appComponente: AppComponent
              ) { }

  selected_evento = { titulo: '', descricao: '', data_evento: '' };
  selected_id: string | number | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selected_id = id;
      this.loadEvento(id);
    });
  }


  loadEvento(id: string | number) {
    this.api.getEvento(id).subscribe(
      data => {
        this.selected_evento = data;
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };

  update(){
    this.api.updateEvento(this.selected_evento).subscribe(
      data => {
        this.selected_evento = data;
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };

  delete(){
    this.api.deleteEvento(this.selected_id).subscribe(
      data => {
        let index;

        this.appComponente.eventos.forEach((e: { id: string | number | undefined; }, i: any) => {
          if(e.id == this.selected_id)
            index = i;
        });
        
        this.appComponente.eventos.splice(index, 1);
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };


  newEvento(){
    this.router.navigate(['new-evento']);
  }

}





