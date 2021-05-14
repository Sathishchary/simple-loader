import { TestBed } from '@angular/core/testing';

import { SimpleLoaderLibService } from './simple-loader-lib.service';

describe('SimpleLoaderLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleLoaderLibService = TestBed.get(SimpleLoaderLibService);
    expect(service).toBeTruthy();
  });
});
