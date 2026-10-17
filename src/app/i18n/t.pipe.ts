import { Pipe, PipeTransform, inject } from "@angular/core";
import { LanguageService } from "./language.service";

@Pipe({name: 't', pure: false})
export class TPipe implements PipeTransform {
    private readonly i18n = inject(LanguageService);
    transform(key: string): string {
        return this.i18n.t(key);
    }
}