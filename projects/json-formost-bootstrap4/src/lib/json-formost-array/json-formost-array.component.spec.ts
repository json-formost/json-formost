import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormostArrayComponent } from './json-formost-array.component';

describe('JsonFormostArrayComponent', () => {
  let component: JsonFormostArrayComponent;
  let fixture: ComponentFixture<JsonFormostArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonFormostArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonFormostArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
