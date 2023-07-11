import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[isAllowed]',
})
export class CustomNgIfDirective {
  //It represents an embedded template that can be used to instantiate embedded
  //It represents a container where one or more views can be attached.
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    console.error(viewContainerRef);
  }

  //The input name and directive name should be same in this case
  @Input('isAllowed') set allowed(isAllowed) {
    isAllowed
      ? this.viewContainerRef.createEmbeddedView(this.templateRef)
      : this.viewContainerRef.clear();
  }
}
