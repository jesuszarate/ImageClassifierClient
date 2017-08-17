import {Component} from 'angular2/core';
import {Config} from "./config.service";
import {UploadImageComponent} from "./uploadImage.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [ UploadImageComponent ]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
}
