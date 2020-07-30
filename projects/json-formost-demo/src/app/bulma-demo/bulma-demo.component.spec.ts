import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaDemoComponent } from './bulma-demo.component';

describe('BulmaDemoComponent', () => {
  let component: BulmaDemoComponent;
  let fixture: ComponentFixture<BulmaDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
