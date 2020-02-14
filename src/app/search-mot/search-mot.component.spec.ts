import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMotComponent } from './search-mot.component';

describe('SearchMotComponent', () => {
  let component: SearchMotComponent;
  let fixture: ComponentFixture<SearchMotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
