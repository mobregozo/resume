import { TestBed } from '@angular/core/testing';

import { JsonInfoService } from './json-info.service';

describe('JsonInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonInfoService = TestBed.get(JsonInfoService);
    expect(service).toBeTruthy();
  });
});
