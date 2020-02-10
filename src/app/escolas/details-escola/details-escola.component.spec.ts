import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEscolaComponent } from './details-escola.component';

describe('DetailsEscolaComponent', () => {
  let component: DetailsEscolaComponent;
  let fixture: ComponentFixture<DetailsEscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsEscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
