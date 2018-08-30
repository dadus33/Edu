import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanEditComponent } from './human-edit.component';

describe('HumanEditComponent', () => {
  let component: HumanEditComponent;
  let fixture: ComponentFixture<HumanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
