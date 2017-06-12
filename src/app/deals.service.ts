import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from '../environments/environment';


@Injectable()
export class DealsService {

    constructor (private http: Http) {}


    getDeals(deal_id?: string) {
        console.log('deal_id', deal_id)
        return this.http.get(environment.url)
            .map(res => res.json());
    }

}
