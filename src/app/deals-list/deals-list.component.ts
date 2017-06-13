import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { EarthService } from '../earth.service';
import 'rxjs/add/operator/pluck';

@Component({
    selector: 'app-earth-list',
    templateUrl: './deals-list.component.html',
    styleUrls: ['./deals-list.component.css'],
    providers: [EarthService]
})
export class DealsListComponent implements OnInit {
    public deals = [];

    constructor(private _earth_service: EarthService,
                private router: Router) {
    }

    ngOnInit() {
    }

    getDeals(deal_id: string) {
        this._earth_service.getDeals(deal_id).subscribe(
            (deals) => {
                console.log('earth in EarthListcomponent', deals);
                this.deals = deals.results;
            }
        );
    }


}
