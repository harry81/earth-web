import { Component } from '@angular/core';

export class HMLocation {
    address: string;
    country: string;
    dongmyun: string;
    id: number;
    isRoadAddress: boolean;
    name : string
    point: any;
    rest: string;
    sido: string;
    sigugun: string;
}


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})

export class AppComponent {
    constructor() {
    }

    title = 'HM earth';
    lat = 51.678418;
    lng = 7.809007;

}
