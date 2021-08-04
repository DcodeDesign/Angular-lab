import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentModalTwoComponent } from './component-modal-two.component';

describe('ComponentModalTwoComponent', () => {
  let component: ComponentModalTwoComponent;
  let fixture: ComponentFixture<ComponentModalTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentModalTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentModalTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
