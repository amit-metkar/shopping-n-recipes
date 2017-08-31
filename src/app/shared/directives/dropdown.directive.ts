import {
  Directive,
  TemplateRef,
  ElementRef,
  Renderer2,
  ViewContainerRef,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    @HostBinding('class.open') isOpen = false;

    constructor(private elementRef: ElementRef,
        private renderer: Renderer2,
        private vcRef: ViewContainerRef) {
    }

    @HostListener('click') toggleOpen(eventData: Event) {
        this.isOpen = !this.isOpen;
    }

    // @HostListener('click') onclick(eventData: Event) {
    //     this.renderer.addClass(this.elementRef.nativeElement, 'open');
    // }

    // @HostListener('blur') onblur(eventData: Event) {
    //     this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    // }
}
