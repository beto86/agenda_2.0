import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosEscolaListComponent } from './eventos-escola-list.component';

describe('EventosEscolaListComponent', () => {
  let component: EventosEscolaListComponent;
  let fixture: ComponentFixture<EventosEscolaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosEscolaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosEscolaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
