import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Filter, AggregationInput, ResultComponent, ResultList, ResultSearchEvent, ViewTypeEnum } from '../namespace';
import { ResultsDirective } from '../results.directive';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit, OnDestroy {

  @Input() itemsPerPage: number;
  @Input() typeName: string;
  @Input() typeVersion: string;

  _list: ResultList;
  @Output() search = new EventEmitter<ResultSearchEvent>();
  @Input()
  set list(list: ResultList) {
    this._list = list;
    if (list) {
      this.setPagination();
      this.loadComponent();
    } else {
      this.from = 0;
      this.to = 0;
      this.total = 0;
    }
  }
  get list() {
    return this._list;
  }

  _aggregations: AggregationInput[];
  @Input()
  set aggregations(aggs: AggregationInput[]) {
    this._aggregations = aggs;
  }
  get aggregations() {
    return this._aggregations;
  }

  @ViewChild(ResultsDirective, { static: true }) appResults: ResultsDirective;
  componentRefList = [];

  from: number;
  to: number;
  total: number;
  paginationItems: number;
  currentPage: number;
  maxSize: number;
  maxNumberOfElements: number;

  searchFrom: number;
  searchQuery: string;
  filterValues: Filter[];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.maxSize = 12;
    this.maxNumberOfElements = 10000;
    this.currentPage = 1;

    const storedSearch = JSON.parse(localStorage.getItem('fishery-' + this.typeName + '-' + this.typeVersion)) || {};
    this.searchQuery = storedSearch.query;
    this.filterValues = storedSearch.filters || [];
  }

  setPagination() {
    this.total = this.list.total;
    this.paginationItems = this.total >= this.maxNumberOfElements ? (this.maxNumberOfElements - this.itemsPerPage) : this.total;    
    const from = +this.itemsPerPage * (this.currentPage - 1);
    this.from = from + 1; // user friendly pagination starts in 1
    this.to = this.total ? (from + this.itemsPerPage) : this.from;
  }

  resetFilter(filterParam: Filter) {
    this.filterValues = this.filterValues.filter(f => JSON.stringify(f.key) !== JSON.stringify(filterParam.key));
    this.search.emit({ from: 0, query: this.searchQuery, filters: this.filterValues });
  }

  searchUsingQuery(event: string) {

    this.currentPage = 1;
    this.searchQuery = event;
    this.searchFrom = 0;
    this.search.emit({ from: this.searchFrom, query: this.searchQuery, filters: this.filterValues });
  }

  searchAggregation(type: string, parameter: string, event: string) {
    this.searchFrom = 0;
    this.currentPage = 1;
    this.filterValues.push({ key: type, parameter: parameter, value: event });
    this.search.emit({ from: this.searchFrom, query: this.searchQuery, filters: this.filterValues });
  }

  pageChanged(event: any) {
    this.currentPage = event.page;
    this.searchFrom = +this.itemsPerPage * (this.currentPage - 1);
    this.search.emit({ from: this.searchFrom, query: this.searchQuery, filters: this.filterValues });
  }

  loadComponent() {
    const viewContainerRef = this.appResults.viewContainerRef;
    viewContainerRef.clear();

    if (this.list.viewType === ViewTypeEnum.COMPONENT) {
      for (const item of this.list.list) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.list.component);
        const componentRef = viewContainerRef.createComponent(componentFactory);
        (componentRef.instance as ResultComponent).data = item;
        this.componentRefList.push(componentRef);
      }
    } else if (this.list.viewType === ViewTypeEnum.TABLE) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.list.component);
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance as ResultComponent).data = this.list.list;
      this.componentRefList.push(componentRef);
    }
  }

  ngOnDestroy() {
    this.componentRefList.forEach(compRef => { if (compRef) { compRef.destroy(); } });
  }

}
