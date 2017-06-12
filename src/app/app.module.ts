import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { DealsMapComponent } from './deals-map/deals-map.component';
import { DealsListComponent } from './deals-list/deals-list.component';


const appRoutes: Routes = [
  { path: 'map', component: DealsMapComponent },
  { path: 'list/:deal_id', component: DealsListComponent },
  { path: '**', component: DealsMapComponent },
];


@NgModule({
    declarations: [
        AppComponent,
        DealsMapComponent,
        DealsListComponent,
    ],
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: false }),
        BrowserModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDRCEiyDSW4JsDxFe7bJ17w9cpnLljvEQA'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
