import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVeiComponent } from './list-vei.component';

describe('ListVeiComponent', () => {
  let component: ListVeiComponent;
  let fixture: ComponentFixture<ListVeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVeiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
