import { Region } from './region.enum';

export interface Country {
    name: CountryName;
    flags: CountryFlag;
    capital: string[];
    currencies: CountryCurrency;
    population: number;
    region: Region;
}

export interface CountryName {
    common: string;
    official: string;
}

export interface CountryFlag {
    png: string;
    svg: string;
}

export interface CountryCurrency {
    name: string;
    symbol: string;
}