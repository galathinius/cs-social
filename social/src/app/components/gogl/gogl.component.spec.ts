import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoglComponent } from './gogl.component';

describe('GoglComponent', () => {
  let component: GoglComponent;
  let fixture: ComponentFixture<GoglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
