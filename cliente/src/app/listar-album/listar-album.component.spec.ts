import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlbumComponent } from './listar-album.component';

describe('ListarAlbumComponent', () => {
  let component: ListarAlbumComponent;
  let fixture: ComponentFixture<ListarAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
