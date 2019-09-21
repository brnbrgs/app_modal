import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modalm2Page } from './modalm2.page';

describe('Modalm2Page', () => {
  let component: Modalm2Page;
  let fixture: ComponentFixture<Modalm2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modalm2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modalm2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
