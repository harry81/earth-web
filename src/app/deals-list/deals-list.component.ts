import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
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
                private router: Router,
                public dialogRef: MdDialogRef<DealsListComponent>,
                @Inject(MD_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {
        this.getDeals(this.data.location_id);
    }

    getDeals(location_id: string) {
        this._earth_service.getDeals(location_id).subscribe(
            (response) => {
                this.location = response;
                this.lat = response.point.coordinates[1];
                this.lng = response.point.coordinates[0];
            }
        );
    }


}
