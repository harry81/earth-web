import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Http, Response }          from '@angular/http';
import { environment } from '../environments/environment';


@Injectable()
export class DealsService {

    constructor (private http: Http) {}

    getDeals() {
        console.log('getDeals()');
        return this.http.get(environment.url)
            .map(res => res.json())
            .subscribe(data => {
                console.log(data);
            })
    }

    private extractData(res: Response) {
        console.log('res');
        let body = res.json();
        return body.data || { };
    }

}
