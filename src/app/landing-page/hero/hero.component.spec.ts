import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HEROComponent } from './hero.component';

describe('HEROComponent', () => {
  let component: HEROComponent;
  let fixture: ComponentFixture<HEROComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HEROComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HEROComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
