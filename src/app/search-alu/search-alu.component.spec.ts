import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAluComponent } from './search-alu.component';

describe('SearchAluComponent', () => {
  let component: SearchAluComponent;
  let fixture: ComponentFixture<SearchAluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
