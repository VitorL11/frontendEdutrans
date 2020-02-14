import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVeiComponent } from './search-vei.component';

describe('SearchVeiComponent', () => {
  let component: SearchVeiComponent;
  let fixture: ComponentFixture<SearchVeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVeiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
