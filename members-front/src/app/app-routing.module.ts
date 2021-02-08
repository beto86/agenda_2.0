import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosDetailComponent } from './eventos-detail/eventos-detail.component';
import { EventosEscolaDetailComponent } from './eventos-escola-detail/eventos-escola-detail.component';
import { EventosEscolaListComponent } from './eventos-escola-list/eventos-escola-list.component';
import { EventosListComponent } from './eventos-list/eventos-list.component';
import { HomeComponent } from './home/home.component';
import { MembersDetailComponent } from './members-detail/members-detail.component';
import { MembersListComponent } from './members-list/members-list.component';
import { NewEventoEscolaComponent } from './new-evento-escola/new-evento-escola.component';
import { NewEventoComponent } from './new-evento/new-evento.component';
import { NewMemberComponent } from './new-member/new-member.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'member-detail/:id', component: MembersDetailComponent},
  { path: 'new-member', component: NewMemberComponent},
  { path: 'eventos-list', component: EventosListComponent},
  { path: 'eventos-detail/:id', component: EventosDetailComponent},
  { path: 'new-evento', component: NewEventoComponent},
  { path: 'members-list', component: MembersListComponent},
  { path: 'eventos-escola-list', component: EventosEscolaListComponent},
  { path: 'eventos-escola-detail/:id', component: EventosEscolaDetailComponent},
  { path: 'new-evento-escola', component: NewEventoEscolaComponent},
  { path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ MembersDetailComponent, 
                                    NewMemberComponent, 
                                    EventosDetailComponent, 
                                    EventosListComponent,
                                    NewEventoComponent,
                                    MembersListComponent,
                                    EventosEscolaListComponent,
                                    EventosEscolaDetailComponent,
                                    NewEventoEscolaComponent,
                                    HomeComponent
                                  ]
