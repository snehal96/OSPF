import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprojectComponent } from './newproject.component';

describe('NewprojectComponent', () => {
  let component: NewprojectComponent;
  let fixture: ComponentFixture<NewprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
