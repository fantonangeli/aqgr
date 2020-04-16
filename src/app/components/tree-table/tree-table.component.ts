import { Component, OnInit, Input } from '@angular/core';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.scss']
})
export class TreeTableComponent implements OnInit {

    @Input() data: any[] = [];
    @Input() columns: any[] = [];
    @Input() childColumns: any[] = [];
    faChartPie = faChartPie;

    constructor() { }

    /**
     * get the toggle icon for the template 
     *
     * @param {[]} element=[] the element
     * @returns {string} the icon
     */
    getToggleIcon(element:any=[]):string{

        if(!element.children) return "";

        if(!element.toggle) return "+";

        return "-";
    }

    /**
     * close all elements in data recursively
     *
     * @param {[]} elements the elements
     *
     */
    closeAll(elements){
        if(!elements) return;

        for (var i = 0, len = elements.length; i < len; i++) {
            elements[i].toggle=false;
            this.closeAll(elements[i].children);
        }
    }

    /**
     * open an element and all the parents recursively
     *
     * @param {[]} element the element to open
     */
    openElement(element){
        if(!element) return;

        element.toggle=true;
        this.openElement(element.parent);
    }

    /**
     * on click action
     *
     * @param {Object} element the element to expand
     */
    onElementClick(element){
        let initialV=element.toggle;
        if(!element || !element.children) return;

        this.closeAll(this.data);

        this.openElement(element);

        if (initialV) {
            element.toggle=false;
        }
    }

    /**
     * intialize the data
     *
     * @param {[array]} data the data
     * @returns {[array]} the data initialized
     */
    initData(data=[]){
        return data.map(e=>{
            e.children=e.splice(-1, 1)[0].map(c=>{
                c.parent=e;
                c.children=c.splice(-1, 1)[0];
                return c;
            });
            return e;
        });
    }

    ngOnChanges() {
        this.data=this.initData(this.data);
    }

    ngOnInit() {
    }

}
