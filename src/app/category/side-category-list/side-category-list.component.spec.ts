import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCategoryListComponent } from './side-category-list.component';

describe('SideCategoryListComponent', () => {
  let component: SideCategoryListComponent;
  let fixture: ComponentFixture<SideCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
