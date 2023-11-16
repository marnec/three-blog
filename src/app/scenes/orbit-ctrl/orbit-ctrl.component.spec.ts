import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitCtrlComponent } from './orbit-ctrl.component';

describe('OrbitCtrlComponent', () => {
  let component: OrbitCtrlComponent;
  let fixture: ComponentFixture<OrbitCtrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrbitCtrlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrbitCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
