/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LecturerListComponent } from './lecturer-list.component';

describe('LecturerListComponent', () => {
  let component: LecturerListComponent;
  let fixture: ComponentFixture<LecturerListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerListComponent);
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
