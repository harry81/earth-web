import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { EarthService } from '../earth.service';

@Component({
    selector: 'app-earth-list',
    templateUrl: './deals-list.component.html',
    styleUrls: ['./deals-list.component.css'],
    providers: [EarthService]
})
export class DealsListComponent implements OnInit {
    public location: any = {};
    public lat: string;
    public lng: string;

    constructor(private _earth_service: EarthService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.getDeals(params['location_id'])
        });
    }

    getDeals(location_id: string) {
        this._earth_service.getDeals(location_id).subscribe(
            (response) => {
                console.log('earth in EarthListcomponent', response);
                this.location = response;
                this.lat = response.point.coordinates[1];
                this.lng = response.point.coordinates[0];
            }
        );
    }


}
