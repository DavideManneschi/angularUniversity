import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowZelleComponent } from './how-zelle.component';

describe('HowZelleComponent', () => {
  let component: HowZelleComponent;
  let fixture: ComponentFixture<HowZelleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowZelleComponent]
    });
    fixture = TestBed.createComponent(HowZelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
