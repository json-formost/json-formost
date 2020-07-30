import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormostControlComponent } from './json-formost-control.component';

describe('JsonFormostControlComponent', () => {
  let component: JsonFormostControlComponent;
  let fixture: ComponentFixture<JsonFormostControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonFormostControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonFormostControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
