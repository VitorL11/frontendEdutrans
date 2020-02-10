import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAlunoComponent } from './details-aluno.component';

describe('DetailsAlunoComponent', () => {
  let component: DetailsAlunoComponent;
  let fixture: ComponentFixture<DetailsAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
