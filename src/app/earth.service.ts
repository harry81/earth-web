import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from '../environments/environment';


@Injectable()
export class EarthService {

    constructor (private http: Http) {}


    getDeals(location_id?: string) {
        console.log('location_id', location_id)
        return this.http.get(environment.url + 'deal/?location=' + location_id)
            .map(res => res.json());
    }

    getLocations(location_id?: string) {
        console.log('location_id', location_id)
        return this.http.get(environment.url, 'location/3/')
            .map(res => res.json());
    }
}
