import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[tooltip]',
})
export class CustomTooltipDirective {
  @Input() tooltipText;

  private tooltiPopup;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    const left =
      (this.el.nativeElement.getBoundingClientRect().left +
        this.el.nativeElement.offsetWidth) /
      2; // Get the middle of the element);

    const right =
      this.el.nativeElement.getBoundingClientRect().right +
      this.el.nativeElement.offsetHeight +
      6; // Get the bottom of the element, plus a little extra
    this.addTooltip(left, right);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.tooltiPopup.remove();
  }

  private addTooltip(left, right) {
    const popup = document.createElement('div');
    popup.innerHTML = this.tooltipText;
    popup.setAttribute('class', 'tooltip-container');
    popup.style.top = left;
    popup.style.top = right;
    document.body.appendChild(popup);
    this.tooltiPopup = popup;
  }
}
