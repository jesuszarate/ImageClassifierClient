System.register(['angular2/core', "./config.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_service_1;
    var UploadImageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            }],
        execute: function() {
            UploadImageComponent = (function () {
                function UploadImageComponent() {
                    this.mainHeading = config_service_1.Config.MAIN_HEADING;
                }
                UploadImageComponent.prototype.allowDrop = function (event) {
                    console.log("allowedDrop");
                    event.preventDefault();
                };
                UploadImageComponent.prototype.drag = function (event, data) {
                    event.dataTransfer.setData('data', data);
                };
                UploadImageComponent.prototype.drop = function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                    var dt = event.dataTransfer;
                    var files = dt.files;
                    //this code line fires the 'handleImage' function (imageLoader change event)
                    var imageLoader = document.getElementById('id_image');
                    imageLoader.files = files;
                };
                UploadImageComponent.prototype.handleImage = function (e) {
                    document.getElementById('header').style.visibility = 'hidden';
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        var uploadImage = document.getElementById("uploadedImage");
                        uploadImage.setAttribute('src', event.target.result);
                    };
                    reader.readAsDataURL(e.target.files[0]);
                };
                UploadImageComponent = __decorate([
                    core_1.Component({
                        selector: 'uploadImage',
                        templateUrl: 'app/ts/uploadImage.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], UploadImageComponent);
                return UploadImageComponent;
            }());
            exports_1("UploadImageComponent", UploadImageComponent);
        }
    }
});
//# sourceMappingURL=uploadImage.component.js.map