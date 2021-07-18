import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    @Output() 
    openSide = new EventEmitter<boolean>();

    isOpenSide: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    onNavClick(): void {
        let isOpenSide = false;
        if(this.isOpenSide == false) {
            isOpenSide = true;
            this.isOpenSide = true;
        }else {
            isOpenSide = false;
            this.isOpenSide = false;
        }
        this.openSide.emit(isOpenSide);
    }

}
