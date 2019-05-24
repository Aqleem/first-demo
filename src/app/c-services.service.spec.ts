import { TestBed } from '@angular/core/testing';

import { CServicesService } from './c-services.service';

describe('CServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CServicesService = TestBed.get(CServicesService);
    expect(service).toBeTruthy();
  });
});
