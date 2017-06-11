import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgmCoreModule } from '@agm/core';

import { DealsMapComponent } from './deals-map.component';

describe('DealsMapComponent', () => {
    let component: DealsMapComponent;
    let fixture: ComponentFixture<DealsMapComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DealsMapComponent ],
            imports: [
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
        const fixture = TestBed.createComponent(DealsMapComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(DealsMapComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('HM earth');
    }));

    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(DealsMapComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to HM earth!!');
    }));

});
