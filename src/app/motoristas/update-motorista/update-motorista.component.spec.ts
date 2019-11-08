import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMotoristaComponent } from './update-motorista.component';

describe('UpdateMotoristaComponent', () => {
  let component: UpdateMotoristaComponent;
  let fixture: ComponentFixture<UpdateMotoristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMotoristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
