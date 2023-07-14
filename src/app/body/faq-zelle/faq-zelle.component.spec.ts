import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqZelleComponent } from './faq-zelle.component';

describe('FaqZelleComponent', () => {
  let component: FaqZelleComponent;
  let fixture: ComponentFixture<FaqZelleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqZelleComponent]
    });
    fixture = TestBed.createComponent(FaqZelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
