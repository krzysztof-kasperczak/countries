import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { FooterService } from 'src/app/shared/services/footer.service';

@Component({
    selector: 'app-countries-main',
    templateUrl: './countries-main.component.html',
    styleUrls: [
        './countries-main.component.scss',
    ],
})
export class CountriesMainComponent implements AfterViewInit {
    @ViewChild('footer') footerTemplate: TemplateRef<any>;

    constructor(private footer: FooterService) { }

    ngAfterViewInit(): void {
        this.footer.setTemplate(this.footerTemplate);
    }
}
