import { NgModule } from '@angular/core';
import { ResponsiveModule, ResponsiveConfig } from 'ng2-responsive'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule, MdButtonModule, MdCardModule, MdListModule, MdMenuModule,
         MdToolbarModule, MdIconModule } from '@angular/material';

import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { DealsMapComponent } from './deals-map/deals-map.component';
import { DealsListComponent } from './deals-list/deals-list.component';


const appRoutes: Routes = [
    { path: 'map', component: DealsMapComponent,},
    { path: 'map/:location_id', component: DealsMapComponent },
    { path: 'list/:location_id', component: DealsListComponent },
    { path: '**', component: DealsMapComponent },
];


let config = {
    breakPoints: {
        xs: {max: 600},
        sm: {min: 601, max: 959},
        md: {min: 960, max: 1279},
        lg: {min: 1280, max: 1919},
        xl: {min: 1920}
    },
    debounceTime: 100 // allow to debounce checking timer
};

export function ResponsiveDefinition(){
    return new ResponsiveConfig(config);
};


@NgModule({
    declarations: [
        AppComponent,
        DealsMapComponent,
        DealsListComponent,
    ],
    imports: [
        ResponsiveModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
        BrowserModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDRCEiyDSW4JsDxFe7bJ17w9cpnLljvEQA'
        }),
        BrowserAnimationsModule,
        MdButtonModule,
        MdMenuModule,
        MdCardModule,
        MdToolbarModule,
        MdIconModule,
        MdListModule,
        MdDialogModule,
    ],
    providers: [
        {
            provide: ResponsiveConfig,
            useFactory: ResponsiveDefinition
        }],
    bootstrap: [AppComponent]
})
export class AppModule { }
