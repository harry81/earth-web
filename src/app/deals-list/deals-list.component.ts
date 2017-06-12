import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
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
                private route:  ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(p => this.getDeals(p && p['deal_id']));
        // this.route.params.pluck<string>('deal_id')
        //     .forEach(deal_id => this.getDeals(deal_id));
    }

    getDeals(deal_id: string) {
        console.log('get deals()');
        this._deals_service.getDeals(deal_id).subscribe(
            (deals) => {
                console.log('deals in DealsListcomponent', deals);
                this.deals = deals.results;
            }
        );
    }


}
