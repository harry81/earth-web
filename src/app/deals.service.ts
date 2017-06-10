import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Http, Response }          from '@angular/http';

@Injectable()
export class DealsService {

    constructor (private http: Http) {}
    url = 'http://hmapps.healworld.co.kr/en/api/earth/deal/';
    url_dev = 'http://localhost:8001/en/api/earth/deal/';

    getDeals() {
        console.log('getDeals()');
        return this.http.get(this.url_dev)
            .map(res => res.json())
            .subscribe(data => {
                console.log('hello');
                console.log(data);
            })
    }

    private extractData(res: Response) {
        console.log('res');
        let body = res.json();
        return body.data || { };
    }

}
