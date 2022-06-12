import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/shared/services/header.service';
import { Country } from '../../model/country';
import { Region } from '../../model/region.enum';
import { CountriesApiService } from '../../services/countries-api.service';

@Component({
    selector: 'app-countries-list',
    templateUrl: './countries-list.component.html',
    styleUrls: [
        './countries-list.component.scss',
    ],
})
export class CountriesListComponent implements OnInit, AfterViewInit {
    countries: Country[];

    @ViewChild('header') headerTemplate: TemplateRef<any>;

    constructor(
        private router: Router,
        private api: CountriesApiService,
        private header: HeaderService,
    ) { }

    ngOnInit(): void {
        const url = this.router.url.replace('/', '');
        this.api.getCountriesByRegion(url as Region).subscribe(x => {
            this.countries = x;
        });
    }

    ngAfterViewInit(): void {
        this.header.setTemplate(this.headerTemplate);
    }


    onClick(country: Country): void {
        this.router.navigate([
            '/country', country.name.common,
        ]);
    }

    onBack(): void {
        this.router.navigate([
            '/',
        ]);
    }
}
