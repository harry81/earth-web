import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgmCoreModule } from '@agm/core';

import { DealsListComponent } from './deals-list.component';

describe('DealsListComponent', () => {
    let component: DealsListComponent;
    let fixture: ComponentFixture<DealsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DealsListComponent ],
            imports: [
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDRCEiyDSW4JsDxFe7bJ17w9cpnLljvEQA'
                })
            ],

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DealsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
