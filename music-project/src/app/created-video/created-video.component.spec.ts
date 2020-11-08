import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedVideoComponent } from './created-video.component';

describe('CreatedVideoComponent', () => {
  let component: CreatedVideoComponent;
  let fixture: ComponentFixture<CreatedVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
