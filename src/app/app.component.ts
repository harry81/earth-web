import { Component } from '@angular/core';
import { DealsService } from './deals.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DealsService]

})
export class AppComponent {
    constructor(private _deals_service: DealsService) {
    }

    title = 'HM earth';
    lat = 51.678418;
    lng = 7.809007;

    get_deal() {
        this._deals_service.getDeals();
    }

}
