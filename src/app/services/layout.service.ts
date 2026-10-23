import { Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class LayoutService {
    showNavbar = signal<boolean>(true);
    showFooter = signal<boolean>(true);
}