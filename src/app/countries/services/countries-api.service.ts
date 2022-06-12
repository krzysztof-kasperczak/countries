import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Country } from '../model/country';
import { Region } from '../model/region.enum';

@Injectable()
export class CountriesApiService {
    private static REGION_URL = 'https://restcountries.com/v3.1/region/';

    private static COUNTRY_URL = 'https://restcountries.com/v3.1/name/';

    private cache = new Map<Region, Country[]>();

    constructor(private httpClient: HttpClient) { }

    getCountriesByRegion(region: Region): Observable<Country[]> {
        if (this.cache.has(region)) {
            return of(this.cache.get(region));
        }

        return this.httpClient.get<any[]>(`${CountriesApiService.REGION_URL}${region}`).pipe(map(x => {
            const result = x.map(this.mapper);
            this.cache.set(region, result);
            return result;
        }));
    }

    getCountryByName(name: string): Observable<Country[]> {
        for (let value of this.cache.values()) {
            if (value.find(x => x.name.common.toLowerCase() === name.toLowerCase())) {
                return of([
                    value.find(x => x.name.common.toLowerCase() === name.toLowerCase()),
                ]);
            }
        }

        return this.httpClient.get<any[]>(`${CountriesApiService.COUNTRY_URL}${name}`).pipe(map(x => {
            return x.map(this.mapper);
        }));
    }

    private mapper(y: any): Country {
        return {
            population: y.population,
            name: {
                common: y.name.common,
                official: y.name.official,
            },
            flags: {
                png: y.flags.png,
                svg: y.flags.svg,
            },
            capital: y.capital,
            currencies: y.currencies[Object.keys(y.currencies)[0]],
            region: y.region as Region,
        };
    }
}