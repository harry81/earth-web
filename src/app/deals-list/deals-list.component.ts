import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
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
                private router: Router) {
    }

    ngOnInit() {
    }

    getDeals(deal_id: string) {
        this._deals_service.getDeals(deal_id).subscribe(
            (deals) => {
                console.log('deals in DealsListcomponent', deals);
                this.deals = deals.results;
            }
        );
    }


}
