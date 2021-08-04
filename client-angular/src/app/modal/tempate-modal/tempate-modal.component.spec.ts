import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateModalComponent } from './tempate-modal.component';

describe('TempateModalComponent', () => {
  let component: TempateModalComponent;
  let fixture: ComponentFixture<TempateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
