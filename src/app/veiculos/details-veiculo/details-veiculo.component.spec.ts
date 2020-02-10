import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVeiculoComponent } from './details-veiculo.component';

describe('DetailsVeiculoComponent', () => {
  let component: DetailsVeiculoComponent;
  let fixture: ComponentFixture<DetailsVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
