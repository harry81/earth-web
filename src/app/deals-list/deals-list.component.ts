import { Component, OnInit } from '@angular/core';
import { DealsService } from '../deals.service';

@Component({
    selector: 'app-deals-list',
    templateUrl: './deals-list.component.html',
    styleUrls: ['./deals-list.component.css'],
    providers: [DealsService]
})
export class DealsListComponent implements OnInit {

    constructor(private _deals_service: DealsService) {
    }

    ngOnInit() {
        this._deals_service.getDeals();
    }


}
