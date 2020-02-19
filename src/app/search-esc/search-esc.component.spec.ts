import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEscComponent } from './search-esc.component';

describe('SearchEscComponent', () => {
  let component: SearchEscComponent;
  let fixture: ComponentFixture<SearchEscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
