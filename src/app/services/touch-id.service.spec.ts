import { TestBed } from '@angular/core/testing';

import { TouchIdService } from './touch-id.service';

describe('TouchIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TouchIdService = TestBed.get(TouchIdService);
    expect(service).toBeTruthy();
  });
});
