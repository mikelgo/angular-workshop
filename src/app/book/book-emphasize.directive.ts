import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBookEmphasize]',
  standalone: true
})
export class BookEmphasizeDirective {
  constructor(
    private elementReference: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  emphasize() {
    this.renderer.setStyle(
      this.elementReference.nativeElement,
      'border',
      '1px solid red'
    );
  }

  @HostListener('mouseleave')
  reset() {
    this.renderer.setStyle(this.elementReference.nativeElement, 'border', '0');
  }
}
