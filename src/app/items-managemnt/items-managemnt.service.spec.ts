import { TestBed } from '@angular/core/testing';

import { ItemsManagemntService } from './items-managemnt.service';

describe('ItemsManagemntService', () => {
  let service: ItemsManagemntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsManagemntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
