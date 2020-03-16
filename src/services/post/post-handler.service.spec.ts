import { TestBed } from '@angular/core/testing';

import { PostHandlerService } from './post-handler.service';

describe('PostHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostHandlerService = TestBed.get(PostHandlerService);
    expect(service).toBeTruthy();
  });
});
