import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appInView]'
})
export class InViewDirective {
  @Output() inView: EventEmitter<void> = new EventEmitter<void>();

  private observer!: any;
  private hasTriggered = false;

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.hasTriggered) {
          this.inView.emit();
          this.hasTriggered = true;
          this.observer.unobserve(this.element.nativeElement);
        }
      },
      { threshold: [0.1] }
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}