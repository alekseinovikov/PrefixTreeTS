import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixTreeComponent } from './prefix-tree.component';

describe('PrefixTreeComponent', () => {
  let component: PrefixTreeComponent;
  let fixture: ComponentFixture<PrefixTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefixTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefixTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
