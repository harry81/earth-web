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
import { EarthService } from '../earth.service';
import { DealsListComponent } from './deals-list.component';

describe('DealsListComponent', () => {
    let component: DealsListComponent;
    let fixture: ComponentFixture<DealsListComponent>;

    let  mockResponse = {
        "address": "서울특별시 중구 남대문로5가 827",
        "sido": "서울특별시",
        "rest": "827",
        "id": 1747,
        "deals": [
            {
                "location": 1747,
                "origin": "list/201702/list_201702_11140_서울특별시_중구.xml",
                "aptfno": "21",
                "area_cd": "11140",
                "bobn": "827",
                "bldg_area": "148.47",
                "id": 8713,
                "sum_amount": 131700,
                "bldg_yy": "2010",
                "dong": "남대문로5가",
                "bldg_nm": "남산트라팰리스",
                "deal_yy": "2017",
                "deal_mm": "2",
                "deal_dd": "1~10"
            }
        ],
        "name": "남산트라팰리스",
        "point": {
            "coordinates": [
                126.9757836,
                37.5538338
            ],
            "type": "Point"
        },
        "isRoadAddress": "False",
        "country": "대한민국",
        "sigugun": "중구",
        "dongmyun": "남대문로5가"
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DealsListComponent ],
            imports: [HttpModule, RouterTestingModule],
            providers: [
                EarthService,
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
        component.getDeals("257");
        expect(component.deals.length).toBe(1);
    }));

});
