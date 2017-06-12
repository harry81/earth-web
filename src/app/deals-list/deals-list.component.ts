import { Component, OnInit } from '@angular/core';
import { DealsService } from '../deals.service';

@Component({
    selector: 'app-deals-list',
    templateUrl: './deals-list.component.html',
    styleUrls: ['./deals-list.component.css'],
    providers: [DealsService]
})
export class DealsListComponent implements OnInit {
    public deals = [];

    constructor(private _deals_service: DealsService) {
    }

    ngOnInit() {
    }

    getDeals() {
        console.log('get deals()');
        this._deals_service.getDeals().subscribe(
            (deals) => {
                console.log('deals in DealsListcomponent', deals);
                this.deals = deals.results;
            }
        );
    }


}
