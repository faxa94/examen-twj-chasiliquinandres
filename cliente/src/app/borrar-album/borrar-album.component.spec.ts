import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarAlbumComponent } from './borrar-album.component';

describe('BorrarAlbumComponent', () => {
  let component: BorrarAlbumComponent;
  let fixture: ComponentFixture<BorrarAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
