/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LecturerAddComponent } from './lecturer-add.component';

describe('LecturerAddComponent', () => {
  let component: LecturerAddComponent;
  let fixture: ComponentFixture<LecturerAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
