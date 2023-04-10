import { Directive, ElementRef, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: '[detectNumber]'
})
export class DetectNumberDirective {

  constructor(
    private _el: ElementRef,
    private ngControl: NgControl,
  ) {}

  @HostListener('input')
  onInput(){
    const newValue: number = this._el.nativeElement.value.trim().replace(/[^\d]+$/g, '');
    this._el.nativeElement.value = newValue;
    this.ngControl.control?.patchValue(newValue, { emitEvent: false });
  }

}
