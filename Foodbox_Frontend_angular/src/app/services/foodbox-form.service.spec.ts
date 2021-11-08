import { TestBed } from '@angular/core/testing';

import { FoodboxFormService } from './foodbox-form.service';

describe('FoodboxFormService', () => {
  let service: FoodboxFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodboxFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
