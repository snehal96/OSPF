import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuecommentsComponent } from './issuecomments.component';

describe('IssuecommentsComponent', () => {
  let component: IssuecommentsComponent;
  let fixture: ComponentFixture<IssuecommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuecommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuecommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
