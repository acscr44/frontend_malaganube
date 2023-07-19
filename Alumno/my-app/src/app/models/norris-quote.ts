import { DatePipe } from "@angular/common";

export class NorrisQuote {


    /*
    "categories": [],
    "created_at": "2020-01-05 13:42:25.352697",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "-pKGtP8JRMOnAdiLaEkxEQ",
    "updated_at": "2020-01-05 13:42:25.352697",
    "url": "https://api.chucknorris.io/jokes/-pKGtP8JRMOnAdiLaEkxEQ",
    "value": "Chuck Norris visited this website before. But he didn't submit a fact, he looked all 8616 facts. That includes this fact."
    */
    
    categories: Array<string>;
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;

    constructor() {
        this.categories = new Array<string>;
        this.created_at = '';
        this.icon_url = '';
        this.id = '';
        this.updated_at = '';
        this.url = '';
        this.value = '';
    }
}
