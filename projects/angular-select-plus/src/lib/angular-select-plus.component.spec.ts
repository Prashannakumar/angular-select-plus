import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSelectPlusComponent } from './angular-select-plus.component';

describe('AngularSelectPlusComponent', () => {
  let component: AngularSelectPlusComponent;
  let fixture: ComponentFixture<AngularSelectPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularSelectPlusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularSelectPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
