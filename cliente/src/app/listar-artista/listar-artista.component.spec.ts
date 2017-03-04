import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarArtistaComponent } from './listar-artista.component';

describe('ListarArtistaComponent', () => {
  let component: ListarArtistaComponent;
  let fixture: ComponentFixture<ListarArtistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarArtistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
