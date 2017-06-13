import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgmCoreModule } from '@agm/core';
import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';

import { DealsMapComponent } from './deals-map.component';

describe('DealsMapComponent', () => {
    let component: DealsMapComponent;
    let fixture: ComponentFixture<DealsMapComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DealsMapComponent ],
            imports: [
                HttpModule, RouterTestingModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDRCEiyDSW4JsDxFe7bJ17w9cpnLljvEQA'
                })
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DealsMapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });


    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));

    it(`should have as title 'app'`, async(() => {
        expect(component.title).toEqual('HM earth');
    }));

    it('should render title in a h1 tag', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to HM earth!!');
    }));

});
