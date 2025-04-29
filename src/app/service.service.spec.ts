import { TestBed } from '@angular/core/testing'; // Removed inject

import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let service: ServiceService; // Declare service variable

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceService]
    });
    service = TestBed.inject(ServiceService); // Use TestBed.inject
  });

  it('should be created', () => { // Updated test signature
    expect(service).toBeTruthy(); // Directly use the injected service
  });

  // Add a test for the updateUserData method
  it('should update user data', () => {
    const initialUser = { ...service.user }; // Copy initial user
    const newData = { name: 'Test User', email: 'test@example.com' };
    service.updateUserData(newData);
    expect(service.user).toEqual(newData);
    expect(service.user).not.toEqual(initialUser);
  });
});
