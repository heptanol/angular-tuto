import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherParentComponent } from './another-parent.component';

describe('AnotherParentComponent', () => {
  let component: AnotherParentComponent;
  let fixture: ComponentFixture<AnotherParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
