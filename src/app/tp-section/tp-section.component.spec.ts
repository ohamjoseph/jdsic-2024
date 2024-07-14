import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpSectionComponent } from './tp-section.component';

describe('TpSectionComponent', () => {
  let component: TpSectionComponent;
  let fixture: ComponentFixture<TpSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
