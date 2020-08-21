import { TestBed } from '@angular/core/testing';

import { SchemaConverterService } from './formost-schema-converter.service';

describe('SchemaConverterService', () => {
  let service: SchemaConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchemaConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
