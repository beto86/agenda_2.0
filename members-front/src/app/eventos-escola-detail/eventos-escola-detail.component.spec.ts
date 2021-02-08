import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosEscolaDetailComponent } from './eventos-escola-detail.component';

describe('EventosEscolaDetailComponent', () => {
  let component: EventosEscolaDetailComponent;
  let fixture: ComponentFixture<EventosEscolaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosEscolaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosEscolaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
