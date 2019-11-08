import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEscolaComponent } from './update-escola.component';

describe('UpdateEscolaComponent', () => {
  let component: UpdateEscolaComponent;
  let fixture: ComponentFixture<UpdateEscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
