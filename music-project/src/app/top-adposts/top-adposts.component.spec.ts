import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAdpostsComponent } from './top-adposts.component';

describe('TopAdpostsComponent', () => {
  let component: TopAdpostsComponent;
  let fixture: ComponentFixture<TopAdpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopAdpostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAdpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
