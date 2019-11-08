import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLinhaComponent } from './create-linha.component';

describe('CreateLinhaComponent', () => {
  let component: CreateLinhaComponent;
  let fixture: ComponentFixture<CreateLinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
