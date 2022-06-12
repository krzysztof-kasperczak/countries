import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterService } from './services/footer.service';
import { HeaderService } from './services/header.service';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ],
    providers: [
        FooterService,
        HeaderService,
    ],
})
export class SharedModule { }
