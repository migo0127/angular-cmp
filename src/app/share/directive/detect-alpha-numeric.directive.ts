import { Directive, ElementRef, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: '[detectAlphaNum]'
})
export class DetectAlphaNumericDirective {

  constructor(
    private _el: ElementRef,
    private ngControl: NgControl,
  ){}

  @HostListener('input')
  onInput(){
    const newValue: string = this._el.nativeElement.value.trim().replace(/[^a-zA-z\d]+$/g, '');
    this._el.nativeElement.value = newValue;
    this.ngControl.control?.patchValue(newValue, { emitEvent: false });
  }
}
