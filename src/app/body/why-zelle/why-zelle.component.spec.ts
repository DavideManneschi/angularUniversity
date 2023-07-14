import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyZelleComponent } from './why-zelle.component';

describe('WhyZelleComponent', () => {
  let component: WhyZelleComponent;
  let fixture: ComponentFixture<WhyZelleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyZelleComponent]
    });
    fixture = TestBed.createComponent(WhyZelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
