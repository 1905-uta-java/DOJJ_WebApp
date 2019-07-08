import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatresComponent } from './theatres.component';

describe('TheatresComponent', () => {
  let component: TheatresComponent;
  let fixture: ComponentFixture<TheatresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
