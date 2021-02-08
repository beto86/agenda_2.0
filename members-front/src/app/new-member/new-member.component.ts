import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {

  member = {name: '', surname: '', phone: ''};

  constructor(private api: ApiService, private apiComponent: AppComponent) { }

  ngOnInit(){
  }

  save(){
    this.api.saveNewMember(this.member).subscribe(
      data => {
        this.apiComponent.members.push(data);
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  }

}
