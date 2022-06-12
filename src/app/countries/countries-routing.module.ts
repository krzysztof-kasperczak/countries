import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountriesMainComponent } from './components/countries-main/countries-main.component';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { RegionsListComponent } from './components/regions-list/regions-list.component';
import { Region } from './model/region.enum';

const routes: Routes = [
    {
        path: '', component: CountriesMainComponent, children: [
            { path: Region.EUROPE, component: CountriesListComponent },
            { path: Region.AFRICA, component: CountriesListComponent },
            { path: Region.AMERICA, component: CountriesListComponent },
            { path: Region.ASIA, component: CountriesListComponent },
            { path: Region.OCEANIA, component: CountriesListComponent },
            { path: 'country/:id', component: CountryInfoComponent },
            { path: '', component: RegionsListComponent },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class CountriesRoutingModule { }
