import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { MdDialog } from '@angular/material';
import { EarthService } from '../earth.service';
import { DealsListComponent } from '../deals-list/deals-list.component';
import { HMLocation } from "../app.component";

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

    zoom = 13;
    flagHideMap = false;
    public location_id : number = 10;

    constructor(private _earth_service: EarthService,
                private route: ActivatedRoute,
                public dialog: MdDialog,
                private router: Router) {
    }
    ngOnInit() {
        console.log('ngOnInit locations', this.locations, this.location_id);
    }

    showMap() {
        this.route.queryParams.subscribe(params => {

            if (! params.hasOwnProperty('lat')) {
                params = {};
                params['lat'] = 37.5547125;
                params['lng'] = 126.9685991;

            }

            this.getLocations(params);
            this.lat = parseFloat(params['lat']) ;
            this.lng = parseFloat(params['lng']);
            console.log(this.lat, this.lng);
        });
    }

    ngAfterContentInit() {
        this.showMap()
        console.log('ngAfterContentInit');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

    getLocations(point) {
        this._earth_service.getLocations(point).subscribe(
            (locations) => {
                this.locations = locations.results;
            }
        );
    }

    toggleMap(location? : HMLocation) {
        this.flagHideMap = !this.flagHideMap;

        if (location != undefined) {
            this.location_id = location.id;
        }
    }

    openDialog(location_id:string) {
       let dialogRef = this.dialog.open(
            DealsListComponent, {
                data: {"location_id": location_id},
                position: {"top": "16px"},
                width: "100vw"
            });

        dialogRef.afterClosed().subscribe(result => {

        });
    }
}
