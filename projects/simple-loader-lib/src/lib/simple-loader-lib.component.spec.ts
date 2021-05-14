import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLoaderLibComponent } from './simple-loader-lib.component';

describe('SimpleLoaderLibComponent', () => {
  let component: SimpleLoaderLibComponent;
  let fixture: ComponentFixture<SimpleLoaderLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleLoaderLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLoaderLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
