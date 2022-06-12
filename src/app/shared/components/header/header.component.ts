import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.scss',
    ],
})
export class HeaderComponent  {
    icon = faEarthEurope;

    constructor(public service: HeaderService) { }
}
