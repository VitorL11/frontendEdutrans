import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMotoristaComponent } from './create-motorista.component';

describe('CreateMotoristaComponent', () => {
  let component: CreateMotoristaComponent;
  let fixture: ComponentFixture<CreateMotoristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMotoristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
