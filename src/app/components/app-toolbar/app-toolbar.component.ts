import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-toolbar',
    templateUrl: 'app-toolbar.component.html',
    styleUrls: ['app-toolbar.component.scss']
})
export class AppToolbarComponent {

    @Output()
    toPage1: EventEmitter<any> = new EventEmitter();

    @Output()
    toPage2: EventEmitter<any> = new EventEmitter();
}
