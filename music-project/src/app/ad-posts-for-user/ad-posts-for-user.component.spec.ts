import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPostsForUserComponent } from './ad-posts-for-user.component';

describe('AdPostsForUserComponent', () => {
  let component: AdPostsForUserComponent;
  let fixture: ComponentFixture<AdPostsForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdPostsForUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPostsForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
