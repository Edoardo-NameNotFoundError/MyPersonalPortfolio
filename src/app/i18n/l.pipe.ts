import { Pipe, PipeTransform, inject } from '@angular/core'

import { LanguageService } from './language.service'
import { LocalizedString } from '../../models/project.interface';
@Pipe({
    name: 'l',
    standalone: true,
    pure: false
})
export class  LPipe implements PipeTransform {
    private i18n = inject(LanguageService);

    transform(value: string | LocalizedString | undefined): string {
        if(!value) return '';
        if(typeof value === 'string') return value;
        return value[this.i18n.lang()];
    }
}