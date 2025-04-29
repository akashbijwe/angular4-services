import { ComponentFixture, TestBed } from '@angular/core/testing'; // Removed async
import { Component1Component } from './component1.component';
import { ServiceService } from '../../service.service'; // Import ServiceService
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

describe('Component1Component', () => {
  let component: Component1Component;
  let fixture: ComponentFixture<Component1Component>;

  beforeEach(async () => { // Use async/await
    await TestBed.configureTestingModule({ // Use await
      declarations: [ Component1Component ],
      imports: [
        NgbModule, // Import NgbModule for NgbModal
        FormsModule // Import FormsModule
      ],
      providers: [
        ServiceService // Provide ServiceService
      ]
    })
    .compileComponents(); // Keep compileComponents

    // Merged second beforeEach content here
    fixture = TestBed.createComponent(Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Initial detectChanges
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
