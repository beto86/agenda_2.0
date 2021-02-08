import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MembersDetailComponent } from './members-detail/members-detail.component';
import { FormsModule } from '@angular/forms';
import { NewMemberComponent } from './new-member/new-member.component';
import { EventosDetailComponent } from './eventos-detail/eventos-detail.component';
import { NewEventoComponent } from './new-evento/new-evento.component';
import { EventosListComponent } from './eventos-list/eventos-list.component';
import { MembersListComponent } from './members-list/members-list.component';
import { EventosEscolaListComponent } from './eventos-escola-list/eventos-escola-list.component';
import { EventosEscolaDetailComponent } from './eventos-escola-detail/eventos-escola-detail.component';
import { NewEventoEscolaComponent } from './new-evento-escola/new-evento-escola.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersDetailComponent,
    NewMemberComponent,
    EventosDetailComponent,
    NewEventoComponent,
    EventosListComponent,
    MembersListComponent,
    EventosEscolaListComponent,
    EventosEscolaDetailComponent,
    NewEventoEscolaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


