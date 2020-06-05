export class Filter {
    key: string;
    parameter: string;
    value: string;
}

export enum ViewTypeEnum {
    TABLE, COMPONENT
}

export class ResultList {
    component: any;
    viewType: ViewTypeEnum;
    total: number;
    list: any[];
}

export interface ResultComponent {
    data: any;
}

export class ResultSearchEvent {
    from: number;
    query: string;
    filters: Filter[];
}

export class SearchRequest {
    q: string;
    filter?: string;
    size?: number;
    from?: number;
    sort?: string;
}


export class Results {
    total: number;
    values: any[];
    aggregations: Aggregation[];
}

export class AggregationInput {
    type: string;
    title: string;
    parameter: string;
    filter:string;
    parent?:string;
    aggregation: Aggregation;
}

export class Aggregation {
    name: string;
    values: AggregationItem[];
}

export class AggregationItem {
    key: string;
    value: number;
}

export class SearchResponse {
    request: SearchRequest;
    took: number;
    results: Results;
}
