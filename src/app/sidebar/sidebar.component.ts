import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { route } from 'src/environments/route';
import { LocalStorageService } from '../services/local-storage.service';

export const LOCAL_STORAGE_KEY_PAGE_HISTORY = 'pageHistory';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    menuList: any = [];

    key: string;

    mainMenu: string;

    currentUrl: string;

    previousUrl: string;

    appName: string;

    appShortName: string;

    userName = 'Sachin B Shelke';

    constructor(private storage: LocalStorageService, private router: Router) { }

    ngOnInit(): void {

        this.appName = environment.appName;
        this.appShortName = environment.appShortName;
        this.onLoad();
    }

    onLoad(): void {

        this.menuList = route;

        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                this.currentUrl = this.router.url;
            }
        });

        if (this.storage.isEmpty(LOCAL_STORAGE_KEY_PAGE_HISTORY + '.currentMenu')) {
            this.storePageInput('dashboard', '#');
        } else {
            this.mainMenu = this.storage.find(LOCAL_STORAGE_KEY_PAGE_HISTORY + '.currentMenu');
            this.previousUrl = this.storage.find(LOCAL_STORAGE_KEY_PAGE_HISTORY + '.currentSubMenu');
        }
    }

    private storePageInput(mainMenuUrl: string, subMenuUrl: string): void {

        this.mainMenu = mainMenuUrl;

        const pageHistory = {
            currentMenu: mainMenuUrl,
            currentSubMenu: subMenuUrl,
            previousMenu: this.storage.find(LOCAL_STORAGE_KEY_PAGE_HISTORY + '.currentMenu'),
            previousSubMenu: this.previousUrl,
        }
        this.storage.remove(LOCAL_STORAGE_KEY_PAGE_HISTORY);
        this.storage.put(LOCAL_STORAGE_KEY_PAGE_HISTORY, pageHistory);
    }

    onClick(url: string, key: string, event: any): void {

        this.key = key;

        switch (url) {
            case '#':
                event.preventDefault();
                break;
            default:
                this.storePageInput(key, '#');
                break;
        }
    }

    onClickSubMenu(mainMenuUrl: string, subMenuUrl: string): void {
        this.storePageInput(mainMenuUrl, subMenuUrl);
    }

    isSubMenuActive(menuName: string): boolean {
        return (this.currentUrl == menuName);
    }

    isMainActive(menuName: string): boolean {
        if (menuName == this.mainMenu) {
            return true;
        }
        if (this.key == menuName) {
            return true;
        }
        return false;
    }

    isCurrentMenuActive(menuName: string): boolean {
        return (menuName == this.mainMenu);
    }
}
