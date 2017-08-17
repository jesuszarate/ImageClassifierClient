import {Component} from 'angular2/core';
import {Config} from "./config.service";


@Component({
    selector: 'uploadImage',
    templateUrl: 'app/ts/uploadImage.component.html'
})

export class UploadImageComponent{
    mainHeading = Config.MAIN_HEADING;

    allowDrop(event) {
        console.log("allowedDrop");
        event.preventDefault();
    }
    drag(event, data) {
        event.dataTransfer.setData('data', data);
    }

    drop(event, data) {
        console.log("droped");
        let dataTransfer = event.dataTransfer.getData('data');
        event.preventDefault();
    }
}



