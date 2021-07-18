import { Component, OnInit } from '@angular/core';
import { route } from 'src/environments/route';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    menuList: any = [];

    constructor() { }

    ngOnInit(): void {
        this.menuList = route;
    }

    onClick(input: string, event: any): void {
        if(input == '#') {
            event.preventDefault();
        }
    }
}
