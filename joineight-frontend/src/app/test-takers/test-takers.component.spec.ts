import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTakersComponent } from './test-takers.component';

describe('TestTakersComponent', () => {
  let component: TestTakersComponent;
  let fixture: ComponentFixture<TestTakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
