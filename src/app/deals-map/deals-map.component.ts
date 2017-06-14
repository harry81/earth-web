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
    public lat;
    public lng;

    constructor(private _earth_service: EarthService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.getLocations(params);
            this.lat = parseFloat(params['lat']);
            this.lng = parseFloat(params['lng']);
            console.log(this.lat, this.lng);
        });
    }

    getLocations(point) {
        this._earth_service.getLocations(point).subscribe(
            (locations) => {
                this.locations = locations.results;
            }
        );
    }

    zoom = 13;
}
