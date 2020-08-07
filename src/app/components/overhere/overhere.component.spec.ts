import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverhereComponent } from './overhere.component';

describe('OverhereComponent', () => {
  let component: OverhereComponent;
  let fixture: ComponentFixture<OverhereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverhereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
