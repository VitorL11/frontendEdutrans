import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLinhaComponent } from './details-linha.component';

describe('DetailsLinhaComponent', () => {
  let component: DetailsLinhaComponent;
  let fixture: ComponentFixture<DetailsLinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsLinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
