import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { EarthService } from '../earth.service';

@Component({
    selector: 'app-deals-map',
    templateUrl: './deals-map.component.html',
    styleUrls: ['./deals-map.component.css'],
    providers: [EarthService]
})
export class DealsMapComponent implements OnInit {
    public locations = [];

    constructor(private _earth_service: EarthService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.getLocations(params['location_id'])
        });
    }

    getLocations(location_id: string) {
        this._earth_service.getLocations(location_id).subscribe(
            (locations) => {
                this.locations = locations.results;
            }
        );
    }

    lat = 36.1148642;
    lng = 128.3389805;
    zoom = 13;
}
