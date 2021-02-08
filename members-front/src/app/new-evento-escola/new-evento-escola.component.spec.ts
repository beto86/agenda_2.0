import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventoEscolaComponent } from './new-evento-escola.component';

describe('NewEventoEscolaComponent', () => {
  let component: NewEventoEscolaComponent;
  let fixture: ComponentFixture<NewEventoEscolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEventoEscolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventoEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
