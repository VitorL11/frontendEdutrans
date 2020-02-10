import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMotoristaComponent } from './details-motorista.component';

describe('DetailsMotoristaComponent', () => {
  let component: DetailsMotoristaComponent;
  let fixture: ComponentFixture<DetailsMotoristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsMotoristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
