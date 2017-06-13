import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { EarthService } from './earth.service';

describe('EarthService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EarthService],
            imports: [
                HttpModule
            ],

        });
    });

    it('should be created', inject([EarthService], (service: EarthService) => {
        expect(service).toBeTruthy();
    }));

    it('shoudl accept optional parameter', inject([EarthService], (service: EarthService) => {
        service.getDeals();
        service.getDeals('10000');

        expect(service).toBeTruthy();
    }));
});
