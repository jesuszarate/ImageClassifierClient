import {Component} from 'angular2/core';
import {Config} from "./config.service";

@Component({
    selector: 'uploadImage',
    templateUrl: 'app/ts/uploadImage.component.html'
})

export class UploadImageComponent {
    mainHeading = Config.MAIN_HEADING;

    allowDrop(event) {
        console.log("allowedDrop");
        event.preventDefault();
    }

    drag(event, data) {

        event.dataTransfer.setData('data', data);
    }

    drop(event) {

        event.stopPropagation();
        event.preventDefault();

        var dt = event.dataTransfer;
        var files = dt.files;

        //this code line fires the 'handleImage' function (imageLoader change event)
        var imageLoader = <HTMLInputElement>document.getElementById('id_image');
        imageLoader.files = files;
    }

    handleImage(e) {
        document.getElementById('header').style.visibility = 'hidden';
        var reader = new FileReader();
        reader.onload = function (event: any) {
            var uploadImage = document.getElementById("uploadedImage");
            uploadImage.setAttribute('src', event.target.result)
        };
        reader.readAsDataURL(e.target.files[0]);
    }
}



