/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LecturerDetailsComponent } from './lecturer-details.component';

describe('LecturerDetailsComponent', () => {
  let component: LecturerDetailsComponent;
  let fixture: ComponentFixture<LecturerDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerDetailsComponent);
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
