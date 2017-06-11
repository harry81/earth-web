import { TestBed, async } from '@angular/core/testing';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDRCEiyDSW4JsDxFe7bJ17w9cpnLljvEQA'
        })
    ],
    }).compileComponents();
  }));

});
