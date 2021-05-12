import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyhomepageComponent } from './facultyhomepage.component';

describe('FacultyhomepageComponent', () => {
  let component: FacultyhomepageComponent;
  let fixture: ComponentFixture<FacultyhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyhomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
