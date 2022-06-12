import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FooterService } from '../shared/services/footer.service';
import { HeaderService } from '../shared/services/header.service';
import { SharedModule } from '../shared/shared.module';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountriesMainComponent } from './components/countries-main/countries-main.component';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { RegionsListComponent } from './components/regions-list/regions-list.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesApiService } from './services/countries-api.service';

@NgModule({
    declarations: [
        RegionsListComponent,
        CountriesListComponent,
        CountriesMainComponent,
        CountryInfoComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        CountriesRoutingModule,
        SharedModule,
    ],
    exports: [
    ],
    providers: [
        CountriesApiService,
        HeaderService,
        FooterService,
    ],
})
export class CountriesModule { }
