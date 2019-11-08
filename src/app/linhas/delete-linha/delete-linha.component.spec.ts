import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLinhaComponent } from './delete-linha.component';

describe('DeleteLinhaComponent', () => {
  let component: DeleteLinhaComponent;
  let fixture: ComponentFixture<DeleteLinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
