/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import { HighlightStudentDirective } from './highlight-student.directive';
import { ElementRef } from '@angular/core';

describe('HighlightStudentDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(null);
    const directive: any = new HighlightStudentDirective(el);
    expect(directive).toBeTruthy();
  });
});

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
