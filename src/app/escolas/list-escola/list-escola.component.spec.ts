import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEscolaComponent } from './list-escola.component';

describe('ListEscolaComponent', () => {
  let component: ListEscolaComponent;
  let fixture: ComponentFixture<ListEscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
