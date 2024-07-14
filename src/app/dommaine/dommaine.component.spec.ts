import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DommaineComponent } from './dommaine.component';

describe('DommaineComponent', () => {
  let component: DommaineComponent;
  let fixture: ComponentFixture<DommaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DommaineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DommaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
