import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZIndexDemo } from './z-index-demo';

describe('ZIndexDemo', () => {
  let component: ZIndexDemo;
  let fixture: ComponentFixture<ZIndexDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZIndexDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(ZIndexDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
