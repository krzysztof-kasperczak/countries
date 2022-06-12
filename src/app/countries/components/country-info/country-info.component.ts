import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeaderService } from 'src/app/shared/services/header.service';
import { Country } from '../../model/country';
import { CountriesApiService } from '../../services/countries-api.service';

@Component({
    selector: 'app-country-info',
    templateUrl: './country-info.component.html',
    styleUrls: [
        './country-info.component.scss',
    ],
})
export class CountryInfoComponent implements OnInit, AfterViewInit {
    country: Country;

    @ViewChild('header') headerTemplate: TemplateRef<any>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private api: CountriesApiService,
        private router: Router,
        private header: HeaderService,
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.pipe(switchMap(x => {
            return this.api.getCountryByName(x['id']);
        })).subscribe(country => {
            this.country = country[0];
        });
    }

    ngAfterViewInit(): void {
        this.header.setTemplate(this.headerTemplate);
    }

    onBack(): void {
        this.router.navigate([
            `/${this.country.region}`,
        ]);
    }
}
