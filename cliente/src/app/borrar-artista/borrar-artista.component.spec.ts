import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarArtistaComponent } from './borrar-artista.component';

describe('BorrarArtistaComponent', () => {
  let component: BorrarArtistaComponent;
  let fixture: ComponentFixture<BorrarArtistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarArtistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
