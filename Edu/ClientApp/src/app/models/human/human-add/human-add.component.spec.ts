import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanAddComponent } from './human-add.component';

describe('HumanAddComponent', () => {
  let component: HumanAddComponent;
  let fixture: ComponentFixture<HumanAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
