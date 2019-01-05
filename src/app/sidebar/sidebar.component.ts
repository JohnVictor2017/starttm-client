import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
    { path: 'user', title: 'User Profile', icon: 'pe-7s-user', class: '' },
    { path: 'events', title: 'eventos', icon: 'pe-7s-date', class: '' },
    { path: 'clubs', title: 'clubes', icon: 'pe-7s-home', class: '' },
    { path: 'table', title: 'Table List', icon: 'pe-7s-note2', class: '' },
    { path: 'typography', title: 'Typography', icon: 'pe-7s-news-paper', class: '' },
    { path: 'icons', title: 'Icons', icon: 'pe-7s-science', class: '' },
    { path: 'notifications', title: 'Notifications', icon: 'pe-7s-bell', class: '' },

];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
