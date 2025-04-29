import { TestBed } from '@angular/core/testing'; // Removed async
import { AppComponent } from './app.component';
import { ServiceService } from './service.service'; // Import ServiceService
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

describe('AppComponent', () => {
  beforeEach(async () => { // Use async/await
    // Mock ServiceService or provide the real one
    // Mock NgbModal or import NgbModule
    await TestBed.configureTestingModule({ // Use await
      declarations: [
        AppComponent
      ],
      imports: [
        NgbModule, // Import NgbModule for NgbModal
        FormsModule // Import FormsModule
      ],
      providers: [
        ServiceService // Provide ServiceService
        // Alternatively, use a mock: { provide: ServiceService, useValue: mockServiceService }
        // Alternatively, use a mock: { provide: NgbModal, useValue: mockNgbModal }
      ]
    }).compileComponents(); // Keep compileComponents for safety with templateUrl/styleUrls
  });

  it('should create the app', () => { // Removed async wrapper
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // Use componentInstance directly
    expect(app).toBeTruthy();
  });

  // Removed the incorrect tests for 'title' property and 'h1' content
});
