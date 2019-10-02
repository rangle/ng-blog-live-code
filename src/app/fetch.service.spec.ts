import { TestBed } from '@angular/core/testing';

import { FetchService } from './fetch.service';
import { HttpClientModule } from '@angular/common/http';

describe('FetchService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }),
  );

  it('should be created', () => {
    const service: FetchService = TestBed.get(FetchService);
    expect(service).toBeTruthy();
  });
});
