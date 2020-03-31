import {
    Component,
    ElementRef,
    Input,
    SimpleChanges,
    OnChanges,
    OnDestroy,
    DoCheck,
  } from '@angular/core';
  
  import { DynamicHTMLRenderer, DynamicHTMLRef } from './renderer';
  
  @Component({
    selector: 'dynamic-html',
    template: '',
  })
  export class DynamicHTMLComponent implements DoCheck, OnChanges, OnDestroy 
  {
    @Input() content: string;
    @Input() data: any;
  
    private ref: DynamicHTMLRef = null;
  
    constructor(
      private renderer: DynamicHTMLRenderer,
      private elementRef: ElementRef,
    ) { }
  
    ngOnChanges(_: SimpleChanges) {
      if (this.ref) {
        this.ref.destroy();
        this.ref = null;
      }
      if (this.content && this.elementRef) {
        this.ref = this.renderer.renderInnerHTML(this.elementRef, this.content, this.data);
      }
    }
  
    ngDoCheck() {
      if (this.ref) {
        this.ref.check();
      }
    }
  
    ngOnDestroy() {
      if (this.ref) {
        this.ref.destroy();
        this.ref = null;
      }
    }
  }