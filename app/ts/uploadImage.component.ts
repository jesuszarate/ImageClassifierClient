import {Component} from 'angular2/core';
import {Config} from "./config.service";
import {element} from "angular2/src/upgrade/angular_js";


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

    readURL(){
        var input = <HTMLInputElement>document.getElementById("id_image");
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(ev:any){
            // reader.onload(e) {
                var element = document.getElementById('blah');
                element.setAttribute('src', ev.target.result);
                //$('#blah')
                //     .attr('src', ev.target.result)
                    // .width(150)
                    // 150.height(200);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
}



