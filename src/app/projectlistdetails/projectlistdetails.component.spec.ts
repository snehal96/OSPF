import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlistdetailsComponent } from './projectlistdetails.component';

describe('ProjectlistdetailsComponent', () => {
  let component: ProjectlistdetailsComponent;
  let fixture: ComponentFixture<ProjectlistdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectlistdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectlistdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
