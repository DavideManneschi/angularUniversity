import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZelleDescriptionComponent } from './zelle-description.component';

describe('ZelleDescriptionComponent', () => {
  let component: ZelleDescriptionComponent;
  let fixture: ComponentFixture<ZelleDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZelleDescriptionComponent]
    });
    fixture = TestBed.createComponent(ZelleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
