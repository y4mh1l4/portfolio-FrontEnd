import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcursoComponent } from './agregarcurso.component';

describe('AgregarcursoComponent', () => {
  let component: AgregarcursoComponent;
  let fixture: ComponentFixture<AgregarcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarcursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
