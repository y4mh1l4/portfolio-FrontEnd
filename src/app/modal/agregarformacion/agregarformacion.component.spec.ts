import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarformacionComponent } from './agregarformacion.component';

describe('AgregarformacionComponent', () => {
  let component: AgregarformacionComponent;
  let fixture: ComponentFixture<AgregarformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
