import { Component, OnInit } from '@angular/core';
import { route } from 'src/environments/route';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    menuList: any = [];

    key: string;

    subMenuName: string;

    onClicked: boolean = false;

    constructor() { }

    ngOnInit(): void {
        this.menuList = route;
    }

    onClick(input: string, key: string, event: any): void {
        if(input == '#') {
            this.key = key;
            this.onClicked = !this.onClicked;
            event.preventDefault();
        }
    }

    onClickSubMenu(input: string, event: any): void {
        if(input == '#') {
            this.subMenuName = input;
            event.preventDefault();
        }
    }

    isActive(menuName: string, type: string): boolean {
        if(type == 'main') {
            return (this.key == menuName);
        }

        if(type == 'sub') {
            return (this.subMenuName == menuName);
        }
    }
}
