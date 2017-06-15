import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdListModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { DealsMapComponent } from './deals-map/deals-map.component';
import { DealsListComponent } from './deals-list/deals-list.component';


const appRoutes: Routes = [
    { path: 'map', component: DealsMapComponent,},
    { path: 'list/:location_id', component: DealsListComponent },
    { path: '**', component: DealsMapComponent },
];


@NgModule({
    declarations: [
        AppComponent,
        DealsMapComponent,
        DealsListComponent,
    ],
    imports: [
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
        MdListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
