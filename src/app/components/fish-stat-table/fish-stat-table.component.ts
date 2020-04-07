import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fish-stat-table',
  templateUrl: './fish-stat-table.component.html',
  styleUrls: ['./fish-stat-table.component.scss']
})
export class FishStatTableComponent implements OnInit {

    @Input() data: any[] = [];
    @Input() columns: any[] = [];
    @Input() childColumns: any[] = [];

    constructor() { }


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
        let siblings=[];
        let initialV=element.toggle;

        // TODO: no action for countries
       

        this.closeAll(this.data);

        this.openElement(element);
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
