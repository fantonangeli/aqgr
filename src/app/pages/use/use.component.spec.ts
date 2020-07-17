import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseComponent } from './conservation-and-sustainable-use.component';

describe('UseComponent', () => {
  let component: UseComponent;
  let fixture: ComponentFixture<UseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
