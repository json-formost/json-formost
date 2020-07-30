import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormostFormComponent } from './json-formost-form.component';

describe('JsonFormostFormComponent', () => {
  let component: JsonFormostFormComponent;
  let fixture: ComponentFixture<JsonFormostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonFormostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonFormostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
