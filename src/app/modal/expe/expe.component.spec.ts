import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeComponent } from './expe.component';

describe('ExpeComponent', () => {
  let component: ExpeComponent;
  let fixture: ComponentFixture<ExpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
