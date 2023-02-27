import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvideocheckoutComponent } from './allvideocheckout.component';

describe('AllvideocheckoutComponent', () => {
  let component: AllvideocheckoutComponent;
  let fixture: ComponentFixture<AllvideocheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllvideocheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllvideocheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
