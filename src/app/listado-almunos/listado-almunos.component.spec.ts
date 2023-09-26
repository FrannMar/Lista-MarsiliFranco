import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlmunosComponent } from './listado-almunos.component';

describe('ListadoAlmunosComponent', () => {
  let component: ListadoAlmunosComponent;
  let fixture: ComponentFixture<ListadoAlmunosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoAlmunosComponent]
    });
    fixture = TestBed.createComponent(ListadoAlmunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
