import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLinhaComponent } from './list-linha.component';

describe('ListLinhaComponent', () => {
  let component: ListLinhaComponent;
  let fixture: ComponentFixture<ListLinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
