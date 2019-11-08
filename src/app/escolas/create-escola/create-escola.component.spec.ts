import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEscolaComponent } from './create-escola.component';

describe('CreateEscolaComponent', () => {
  let component: CreateEscolaComponent;
  let fixture: ComponentFixture<CreateEscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
