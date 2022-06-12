import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Region } from '../../model/region.enum';

@Component({
    selector: 'app-regions-list',
    templateUrl: './regions-list.component.html',
    styleUrls: [
        './regions-list.component.scss',
    ],
})
export class RegionsListComponent {
    Region = Region;

    constructor(private router: Router) { }

    navigateTo(region: Region): void {
        this.router.navigate([
            `/${region}`,
        ]);
    }
}
