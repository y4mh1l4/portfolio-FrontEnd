import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregardesafioComponent } from './agregardesafio.component';

describe('AgregardesafioComponent', () => {
  let component: AgregardesafioComponent;
  let fixture: ComponentFixture<AgregardesafioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregardesafioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregardesafioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
