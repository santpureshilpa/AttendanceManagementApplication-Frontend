import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursehomepageComponent } from './coursehomepage.component';

describe('CoursehomepageComponent', () => {
  let component: CoursehomepageComponent;
  let fixture: ComponentFixture<CoursehomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursehomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursehomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
