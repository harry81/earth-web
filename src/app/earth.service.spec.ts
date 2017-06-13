import { TestBed, inject } from '@angular/core/testing';
import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';
import { EarthService } from './earth.service';

describe('EarthService', () => {
    let  mockResponseOfDeal = {
        "results": [
            {
                "location": null,
                "aptfno": "1",
                "area_cd": "47190",
                "bobn": "1076-1",
                "bldg_area": "47.44",
                "id": 4003,
                "sum_amount": 5000,
                "bldg_yy": "1993",
                "dong": "원평동",
                "bldg_nm": "두산맨션",
                "deal_yy": "2017",
                "deal_mm": "1",
                "deal_dd": "1~10"
            },
            {
                "location": null,
                "aptfno": "4",
                "area_cd": "47190",
                "bobn": "224",
                "bldg_area": "84.95",
                "id": 4009,
                "sum_amount": 19500,
                "bldg_yy": "2007",
                "dong": "도량동",
                "bldg_nm": "휴먼시아4단지",
                "deal_yy": "2017",
                "deal_mm": "1",
                "deal_dd": "11~20"
            },
            {
                "location": null,
                "aptfno": "3",
                "area_cd": "47190",
                "bobn": "81",
                "bldg_area": "31.47",
                "id": 4057,
                "sum_amount": 4300,
                "bldg_yy": "1982",
                "dong": "송정동",
                "bldg_nm": "한우2",
                "deal_yy": "2017",
                "deal_mm": "1",
                "deal_dd": "11~20"
            }
        ],
        "previous": null,
        "next": "http://localhost:8001/en/api/earth/deal/?limit=10&offset=10",
        "count": 297
    }

    let  mockResponseOfLocation = {
        "results": [
            {
                "address": "경상북도 구미시 도량동 112",
                "id": 92,
                "point": null,
                "isRoadAddress": "False",
                "country": "대한민국",
                "sigugun": "구미시",
                "dongmyun": "도량동",
                "rest": "112",
                "sido": "경상북도"
            },
            {
                "address": "경상북도 구미시 도량동 222",
                "id": 93,
                "point": null,
                "isRoadAddress": "False",
                "country": "대한민국",
                "sigugun": "구미시",
                "dongmyun": "도량동",
                "rest": "222",
                "sido": "경상북도"
            },
            {
                "address": "경상북도 구미시 상모동 70",
                "id": 188,
                "point": null,
                "isRoadAddress": "False",
                "country": "대한민국",
                "sigugun": "구미시",
                "dongmyun": "상모동",
                "rest": "70",
                "sido": "경상북도"
            }
        ],
        "previous": null,
        "next": "http://localhost:8001/en/api/earth/location/?limit=10&offset=10",
        "count": 114
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [
                EarthService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });
    });

    it('should be created', inject([EarthService], (service: EarthService) => {
        expect(service).toBeTruthy();
    }));

    it('shoudl have getDeals()', inject([EarthService], (service: EarthService) => {
        service.getDeals();
        service.getDeals('10000');
    }));

    it('shoudl have getDeals()',
       inject([EarthService, XHRBackend],
              (service: EarthService, mockBackend) => {

                  mockBackend.connections.subscribe((connection) => {
                      connection.mockRespond(new Response(new ResponseOptions({
                          body: JSON.stringify(mockResponseOfDeal)
                      })));
                  });

                  service.getDeals().subscribe((deals) => {
                      expect(deals.results.length).toBe(3);
                  });
              }));

   it('shoudl have getLocations()',
       inject([EarthService, XHRBackend],
              (service: EarthService, mockBackend) => {

                  mockBackend.connections.subscribe((connection) => {
                      connection.mockRespond(new Response(new ResponseOptions({
                          body: JSON.stringify(mockResponseOfLocation)
                      })));
                  });

                  service.getLocations().subscribe((locations)=> {
                      expect(locations.results.length).toBe(3);
                  });
              }));
    
});
