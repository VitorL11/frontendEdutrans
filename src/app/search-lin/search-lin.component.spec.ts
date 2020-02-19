import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLinComponent } from './search-lin.component';

describe('SearchLinComponent', () => {
  let component: SearchLinComponent;
  let fixture: ComponentFixture<SearchLinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
