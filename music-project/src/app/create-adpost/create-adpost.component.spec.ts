import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdpostComponent } from './create-adpost.component';

describe('CreateAdpostComponent', () => {
  let component: CreateAdpostComponent;
  let fixture: ComponentFixture<CreateAdpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
