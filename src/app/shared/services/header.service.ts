import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class HeaderService {
    private _template = new BehaviorSubject<TemplateRef<any>>(null);
    
    public get template() : Observable<TemplateRef<any>> {
        return this._template.asObservable();
    }
    
    public setTemplate(value: TemplateRef<any>) {
        setTimeout(() => {
            this._template.next(value);
        }, 0);
    }
}