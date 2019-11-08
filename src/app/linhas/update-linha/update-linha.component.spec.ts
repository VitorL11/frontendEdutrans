import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLinhaComponent } from './update-linha.component';

describe('UpdateLinhaComponent', () => {
  let component: UpdateLinhaComponent;
  let fixture: ComponentFixture<UpdateLinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
