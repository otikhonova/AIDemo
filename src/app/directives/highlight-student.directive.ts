/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightStudent]',
  standalone: true
})
export class HighlightStudentDirective {

	constructor(private el: ElementRef) {
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('gray');
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight('');
	}

	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
