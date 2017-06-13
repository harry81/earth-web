import { Component, OnInit } from '@angular/core';
import { DealsService } from '../deals.service';
import 'rxjs/add/operator/pluck';

@Component({
    selector: 'app-deals-list',
    templateUrl: './deals-list.component.html',
    styleUrls: ['./deals-list.component.css'],
    providers: [DealsService]
})
export class DealsListComponent implements OnInit {
    public deals = [];

    constructor(private _deals_service: DealsService,
) {
    }

    ngOnInit() {
    }

    getDeals(deal_id: string) {
        this._deals_service.getDeals().subscribe(
            (deals) => {
                console.log('deals in DealsListcomponent', deals);
                this.deals = deals.results;
            }
        );
    }


}
