import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    openSide: boolean;

    @Input() moduleName: string = "Main Page";
    
    title = 'online-attendence-web';

    onHideSide(event: boolean): void {
        this.openSide = event;
    }
}
