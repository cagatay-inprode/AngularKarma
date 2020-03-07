import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplerlistComponent } from './supplerlist.component';

describe('SupplerlistComponent', () => {
  let component: SupplerlistComponent;
  let fixture: ComponentFixture<SupplerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
