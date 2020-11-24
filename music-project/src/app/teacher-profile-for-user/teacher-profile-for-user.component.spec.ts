import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileForUserComponent } from './teacher-profile-for-user.component';

describe('TeacherProfileForUserComponent', () => {
  let component: TeacherProfileForUserComponent;
  let fixture: ComponentFixture<TeacherProfileForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherProfileForUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherProfileForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
