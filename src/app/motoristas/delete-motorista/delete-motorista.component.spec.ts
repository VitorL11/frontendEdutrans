import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMotoristaComponent } from './delete-motorista.component';

describe('DeleteMotoristaComponent', () => {
  let component: DeleteMotoristaComponent;
  let fixture: ComponentFixture<DeleteMotoristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMotoristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
