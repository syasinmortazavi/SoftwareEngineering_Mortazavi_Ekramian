import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassVideosComponent } from './class-videos.component';

describe('ClassVideosComponent', () => {
  let component: ClassVideosComponent;
  let fixture: ComponentFixture<ClassVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
