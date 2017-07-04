import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from '../environments/environment';
import { HMLocation } from "./app.component";


@Injectable()
export class EarthService {

    constructor (private http: Http) {}

    getDeals(location_id: number) {
        console.log('location at service--', location_id);
        return this.http.get(environment.url + 'location/' + location_id + '/')
            .map(res => res.json());
    }

    getLocations(point) {
        let params = {};
        if (point) {
            params = {
                "dist":500,
                "point": point['lng'] + ',' + point['lat'] }
        }
        return this.http.get(environment.url + 'location/', {"search": params})
            .map(res => res.json());
    }
}
