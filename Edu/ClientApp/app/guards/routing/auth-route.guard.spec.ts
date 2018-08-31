import { TestBed, inject } from '@angular/core/testing';

import { AuthRouteGuard } from './auth-route.guard';

describe('AuthRouteGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRouteGuard]
    });
  });

  it('should be created', inject([AuthRouteGuard], (service: AuthRouteGuard) => {
    expect(service).toBeTruthy();
  }));
});
