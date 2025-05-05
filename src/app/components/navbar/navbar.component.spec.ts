import { ComponentFixture, TestBed } from '@angular/core/testing'; // Removed async

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => { // Use async/await
    await TestBed.configureTestingModule({ // Use await
      declarations: [ NavbarComponent ]
      // No Imports or Providers needed as NavbarComponent is standalone
    })
    .compileComponents(); // Keep compileComponents

    // Merged second beforeEach content here
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Initial detectChanges
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
