import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { AgmCoreModule } from '@agm/core';
import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { DealsService } from '../deals.service';
import { DealsListComponent } from './deals-list.component';

describe('DealsListComponent', () => {
    let component: DealsListComponent;
    let fixture: ComponentFixture<DealsListComponent>;

    let  mockResponse = {
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
                "bobn": "670",
                "bldg_area": "70.44",
                "id": 4015,
                "sum_amount": 8400,
                "bldg_yy": "1993",
                "dong": "도량동",
                "bldg_nm": "귀빈맨션",
                "deal_yy": "2017",
                "deal_mm": "1",
                "deal_dd": "21~31"
            }
        ],
        "previous": null,
        "next": "http://localhost:8001/en/api/earth/deal/?limit=10&offset=10",
        "count": 297
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DealsListComponent ],
            imports: [HttpModule, RouterTestingModule],
            providers: [
                DealsService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DealsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should work work dealsService with async', inject([XHRBackend], (mockBackend) => {

        mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(mockResponse)
            })));
        });

        expect(component.deals.length).toBe(0);
        component.getDeals('3');
        expect(component.deals.length).toBe(3);
    }));

});
