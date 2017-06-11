import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-deals-map',
    templateUrl: './deals-map.component.html',
    styleUrls: ['./deals-map.component.css']
})
export class DealsMapComponent implements OnInit {

    constructor() {
    }

    title = 'HM earth';
    lat = 51.678418;
    lng = 7.809007;

    ngOnInit() {
    }

}
