import { TestBed, inject } from '@angular/core/testing';

import { UrlservidorService } from './urlservidor.service';

describe('UrlservidorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlservidorService]
    });
  });

  it('should ...', inject([UrlservidorService], (service: UrlservidorService) => {
    expect(service).toBeTruthy();
  }));
});
