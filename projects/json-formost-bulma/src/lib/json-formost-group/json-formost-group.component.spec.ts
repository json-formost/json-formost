import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormostGroupComponent } from './json-formost-group.component';

describe('JsonFormostGroupComponent', () => {
  let component: JsonFormostGroupComponent;
  let fixture: ComponentFixture<JsonFormostGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonFormostGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonFormostGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
