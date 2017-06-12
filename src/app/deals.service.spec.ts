import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { DealsService } from './deals.service';

describe('DealsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DealsService],
            imports: [
                HttpModule
            ],

        });
    });

    it('should be created', inject([DealsService], (service: DealsService) => {
        expect(service).toBeTruthy();
    }));

    it('shoudl accept optional parameter', inject([DealsService], (service: DealsService) => {
        service.getDeals();
        service.getDeals('10000');

        expect(service).toBeTruthy();
    }));
});
