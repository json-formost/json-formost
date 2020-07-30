import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bootstrap4DemoComponent } from './bootstrap4-demo.component';

describe('Bootstrap4DemoComponent', () => {
  let component: Bootstrap4DemoComponent;
  let fixture: ComponentFixture<Bootstrap4DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bootstrap4DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bootstrap4DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
