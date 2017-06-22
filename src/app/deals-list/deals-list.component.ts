import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { Location }                 from '@angular/common';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { EarthService } from '../earth.service';
import { DealsMapComponent } from '../deals-map/deals-map.component';
import { HMLocation } from "../app.component";

@Component({
    selector: 'app-earth-list',
    templateUrl: './deals-list.component.html',
    styleUrls: ['./deals-list.component.css'],
    providers: [EarthService]
})
export class DealsListComponent implements OnInit {
    public locations: any = {};
    public lat: string;
    public lng: string;

    @Input() selectedLocation: number;

    constructor(private _earth_service: EarthService,
                private route: ActivatedRoute,
                private router: Router,
                private location: Location) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let location_id = params['location_id'];

            if (location_id) {
                this.getDeals(location_id);
            }
        });
    }

    getDeals(location_id: number) {
        this._earth_service.getDeals(location_id).subscribe(
            (response) => {
                this.locations = response;
                this.lat = response.point.coordinates[1];
                this.lng = response.point.coordinates[0];
            }
        );
    }

    goBack(): void {
        this.location.back();
    }

    ngOnChanges() {
        if (this.selectedLocation != undefined) {
            console.log('ngOnChanges', this.selectedLocation);
            this.getDeals(this.selectedLocation);
        }
    }
}
