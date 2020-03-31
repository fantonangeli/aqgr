import { Injectable, Injector, ElementRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { DynamicHTMLOptions } from './options';
import { OnMount } from './interfaces';
import * as jsonPath from 'jsonpath/jsonpath';

export interface DynamicHTMLRef {
  check: () => void;
  destroy: () => void;
}

function isBrowserPlatform() {
  return window != null && window.document != null;
}

@Injectable()
export class DynamicHTMLRenderer 
{
  /*  
  phPrefix = '${';
  phSuffix = '}';
  
  attrPrefix = '${';
  attrSuffix = '}';
  */
 
  phPrefix = '${';
  phSuffix = '}';

  attrPrefix = 'a[';
  attrSuffix = ']';

  private componentFactories = new Map<string, ComponentFactory<any>>();

  private componentRefs = new Map<any, Array<ComponentRef<any>>>();

  constructor(private options: DynamicHTMLOptions, private cfr: ComponentFactoryResolver, private injector: Injector) {
    this.options.components.forEach(({ selector, component }) => {
      let cf: ComponentFactory<any>;
      cf = this.cfr.resolveComponentFactory(component);
      this.componentFactories.set(selector, cf);
    });
  }

  
  processTextElement(data: any, innerText: string): string
  {
    let re = new RegExp(/\${.[^\}]{1,}\}/gi);

    if (innerText) 
    {
      while (innerText.match(re) && innerText.match(re).length > 0)
      {
        let out = innerText.match(re)[0];
        const path = out.substring(this.phPrefix.length,out.indexOf(this.phSuffix));
        const attrValues = jsonPath.query(data, '$.' + path);
        if (attrValues.length > 0) {
          innerText = innerText.replace(this.phPrefix + path + this.phSuffix,attrValues[0]);
        } else {
          innerText = innerText.replace(this.phPrefix + path + this.phSuffix,'');
        }
      }
    }

    return innerText;
  }

  setInnerTextChildren(data, child: Element)
  {
    if (child.children) 
    {
      for(let i=0; i<child.children.length; i++)
      {
        this.setInnerTextChildren(data, child.children[i]);
      }
    }

    child.innerHTML = this.processTextElement(data, child.innerHTML);
  }

  renderInnerHTML(elementRef: ElementRef, html: string, data: any): DynamicHTMLRef 
  {
    if (!isBrowserPlatform()) {
      return {
        check: () => {},
        destroy: () => {},
      };
    }

    elementRef.nativeElement.innerHTML = html;

    this.setInnerTextChildren(data, elementRef.nativeElement);

    const componentRefs: Array<ComponentRef<any>> = [];
    this.options.components.forEach(({ selector }) => {
      const elements = (elementRef.nativeElement as Element).querySelectorAll(selector);

      Array.prototype.forEach.call(elements, (el: Element) => {
        const content = el.innerHTML;
        const cmpRef = this.componentFactories.get(selector).create(this.injector, [], el);

        el.removeAttribute('ng-version');
        
        // If a data object is provided (representing the whole resource), I try to map it to the eventually provided attributes
        // of the component
        if (data) 
        {          
          for(let i=0; i<el.attributes.length; i++) 
          {
            const attr = el.attributes[i];
            const attrName = attr.name;
            const attrValue = attr.value;            

            if (attrValue > '') 
            {
              if (attrValue.indexOf('.') > 0) //if (attrValue.indexOf(this.attrPrefix) >= 0) 
              {
                // Extraction of the data value through jsonpath using the attribute value
                const attrValues = jsonPath.query(data, '$.' + attrValue);  //.replace(this.attrPrefix,'').replace(this.attrSuffix,'')
                if (attrValues.length > 0) {
                  cmpRef.instance[attrName] = attrValues[0];
                }
              }
              else if (attrValue.indexOf(' ') > 0) {
                cmpRef.instance[attrName] = attrValue;
              }
              else
              {
                const attrValues = jsonPath.query(data, '$.' + attrValue);
                if (attrValues.length > 0) {
                  cmpRef.instance[attrName] = attrValues[0];
                } else {
                  cmpRef.instance[attrName] = attrValue;
                }
              }              
            }
          };
        }

        if (cmpRef.instance.dynamicOnMount) {
          const attrsMap = new Map<string, string>();
          if (el.hasAttributes()) {
            Array.prototype.forEach.call(el.attributes, (attr: Attr) => {
              attrsMap.set(attr.name, attr.value);
            });
          }
          (cmpRef.instance as OnMount).dynamicOnMount(attrsMap, content, el);
        }

        componentRefs.push(cmpRef);
      });
    });
    this.componentRefs.set(elementRef, componentRefs);
    return {
      check: () => componentRefs.forEach(ref => ref.changeDetectorRef.detectChanges()),
      destroy: () => {
        componentRefs.forEach(ref => ref.destroy());
        this.componentRefs.delete(elementRef);
      },
    };
  }
}