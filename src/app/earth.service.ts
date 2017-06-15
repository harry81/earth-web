import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from '../environments/environment';


@Injectable()
export class EarthService {

    constructor (private http: Http) {}


    getDeals(location_id?: string) {
        return this.http.get(environment.url + 'location/' + location_id + '/')
            .map(res => res.json());
    }

    getLocations(point) {
        return this.http.get(environment.url + 'location/?dist=0.1&point=' + point['lng'] + ','+ point['lat'])
            .map(res => res.json());
    }
}
