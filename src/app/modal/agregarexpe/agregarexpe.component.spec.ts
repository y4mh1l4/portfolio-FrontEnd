import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarexpeComponent } from './agregarexpe.component';

describe('AgregarexpeComponent', () => {
  let component: AgregarexpeComponent;
  let fixture: ComponentFixture<AgregarexpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarexpeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarexpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
