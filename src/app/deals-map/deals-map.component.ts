import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { Location } from '@angular/common';
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

    public lat_now;
    public lng_now;

    zoom = 16;
    public location_id : number = 10;

    private markerList = {};
    private select_location;

    constructor(private _earth_service: EarthService,
                private route: ActivatedRoute,
                public dialog: MdDialog,
                private location: Location,
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

        setTimeout(() => {
            this.route.params.subscribe(params => {
                let location_id = params['location_id'];
                console.log('location id', params['location_id']);

                if (params['location_id'] != undefined) {
                    this.openDialog(params['location_id']);
                }
            });
        }, 1);

    }

    ngAfterContentInit() {
        this.showMap()
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

    openDialog(location_id:string) {
        console.log('location', location_id);
        const config = new MdDialogConfig();
        config.width = "100%";
        config.height = "100%";
        config.data = {"location_id": location_id};

        let dialogRef = this.dialog.open(
            DealsListComponent,  config);

        dialogRef.afterClosed().subscribe(result => {
            this.location.replaceState("/map");
        });
    }

    // https://github.com/KrisToe4/cpsdata/blob/bb65a77eda873b4701366ce3c985c307bbd87ea1/client/src/app/map/map-viewport/map-viewport.component.ts
    markerClicked(location){
        this.select_location = location;
        console.log('marker clicked', this.select_location);
    }

    mapClick() {
        this.select_location = null;
    }

    centerChange($event ) {
        this.lat_now = $event.lat;
        this.lng_now = $event.lng;

    }

    refreshLocation() {
        let params = {};

        params['lat'] = this.lat_now;
        params['lng'] = this.lng_now;

        console.log('params', params);
        this.getLocations(params);
    }

}
