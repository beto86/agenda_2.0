import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent {
  title = 'members-front';


  selected_member = {id: 0, name: '', surname: ''};

  members = [
    {name: 'Member 01', id: 1, surname: "Ciclano", photo: 'http://www.minhaapp.com/photo1'},
    {name: 'Member 02', id: 2, surname: "Fulano", photo: 'http://www.minhaapp.com/photo2'},
    {name: 'Member 03', id: 3, surname: "Beltrano", photo: 'http://www.minhaapp.com/photo3'},
  ];


  constructor(private api:ApiService, private router: Router) {
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };

  memberClicked = (member: { id: any; }) => {
    this.router.navigate(['member-detail', member.id])
  };

}
