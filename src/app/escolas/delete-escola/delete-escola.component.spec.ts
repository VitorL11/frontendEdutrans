import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEscolaComponent } from './delete-escola.component';

describe('DeleteEscolaComponent', () => {
  let component: DeleteEscolaComponent;
  let fixture: ComponentFixture<DeleteEscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
