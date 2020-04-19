(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-completar-registro-completar-registro-module"],{

/***/ "./src/app/pages/completar-registro/completar-registro.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/completar-registro/completar-registro.module.ts ***!
  \***********************************************************************/
/*! exports provided: CompletarRegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletarRegistroPageModule", function() { return CompletarRegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _completar_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./completar-registro.page */ "./src/app/pages/completar-registro/completar-registro.page.ts");







var routes = [
    {
        path: '',
        component: _completar_registro_page__WEBPACK_IMPORTED_MODULE_6__["CompletarRegistroPage"]
    }
];
var CompletarRegistroPageModule = /** @class */ (function () {
    function CompletarRegistroPageModule() {
    }
    CompletarRegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_completar_registro_page__WEBPACK_IMPORTED_MODULE_6__["CompletarRegistroPage"]]
        })
    ], CompletarRegistroPageModule);
    return CompletarRegistroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/completar-registro/completar-registro.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/completar-registro/completar-registro.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>completar-registro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div>\r\n        <ion-row no-padding class=\"animated fadeIn fast\">\r\n            <ion-col size=\"6\" offset=\"3\">\r\n                <img class=\"circular\" [src]=\"image\" *ngIf=\"image\" />\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row no-padding class=\"animated fadeIn fast\">\r\n            <ion-col size=\"6\" offset=\"3\">\r\n                <ion-button fill=\"outline\" expand=\"block\" size=\"small\" (click)=\"getPicture()\">Agrega tu Foto</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </div>\r\n    <form  style=\"font-family: Comfortaa\" [formGroup]=\"validations_form\" (ngSubmit)=\"onSubmit(validations_form.value)\">\r\n  \r\n        <ion-item>\r\n            <ion-label position=\"floating\" color=\"ion-color-dark\">Nombre</ion-label>\r\n            <ion-input placeholder=\"Nombre\" type=\"text\" formControlName=\"nombre\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\" color=\"ion-color-dark\">Apellido</ion-label>\r\n            <ion-input placeholder=\"Apellido\" type=\"text\" formControlName=\"apellido\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n                <ion-label position=\"floating\" color=\"ion-color-dark\">Correo Electronico</ion-label>\r\n                <ion-input placeholder=\"Correo Electronico\" type=\"text\" formControlName=\"email\"></ion-input>\r\n            </ion-item>\r\n        <ion-item>\r\n                <div>\r\n                    <ion-datetime displayFormat=\"DD/MM/YYYY\" pickerFormat=\"DD/MM/YYYY\" padding placeholder=\"Fecha de Nacimiento\" type=\"date\" formControlName=\"fechaNacimiento\"  done-text=\"Aceptar\" cancel-text=\"Cancelar\"></ion-datetime>\r\n                </div>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\" color=\"ion-color-dark\">Edad</ion-label>\r\n            <ion-input placeholder=\"Edad\" type=\"number\" formControlName=\"edad\"></ion-input>\r\n        </ion-item>\r\n   \r\n        <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" [disabled]=\"!validations_form.valid\" class=\"boton-crear\">Terminar Registro</ion-button>\r\n    </form>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/completar-registro/completar-registro.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/completar-registro/completar-registro.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBsZXRhci1yZWdpc3Ryby9jb21wbGV0YXItcmVnaXN0cm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/completar-registro/completar-registro.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/completar-registro/completar-registro.page.ts ***!
  \*********************************************************************/
/*! exports provided: CompletarRegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletarRegistroPage", function() { return CompletarRegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_completar_registro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/completar-registro.service */ "./src/app/services/completar-registro.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");









var CompletarRegistroPage = /** @class */ (function () {
    function CompletarRegistroPage(formBuilder, router, firebaseService, camera, imagePicker, toastCtrl, loadingCtrl, webview) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.firebaseService = firebaseService;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.webview = webview;
        this.errorMessage = '';
        this.successMessage = '';
    }
    CompletarRegistroPage.prototype.ngOnInit = function () {
        this.resetFields();
    };
    CompletarRegistroPage.prototype.resetFields = function () {
        this.image = './assets/imgs/retech.png';
        this.validations_form = this.formBuilder.group({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            fechaNacimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            edad: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
    };
    CompletarRegistroPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            nombre: value.nombre,
            email: value.email,
            apellido: value.apellido,
            fechaNacimiento: value.fechaNacimiento,
            edad: value.edad,
            image: this.image
        };
        this.firebaseService.createInquilinoPerfil(data)
            .then(function (res) {
            _this.router.navigate(['/tabs/tab1']);
        });
    };
    CompletarRegistroPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission()
            .then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.uploadImageToFirebase(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    CompletarRegistroPage.prototype.uploadImageToFirebase = function (image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, toast, image_src, randomId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Image was updated successfully',
                                duration: 3000
                            })];
                    case 2:
                        toast = _a.sent();
                        this.presentLoading(loading);
                        image_src = this.webview.convertFileSrc(image);
                        randomId = Math.random().toString(36).substr(2, 5);
                        //uploads img to firebase storage
                        this.firebaseService.uploadImage(image_src, randomId)
                            .then(function (photoURL) {
                            _this.image = photoURL;
                            loading.dismiss();
                            toast.present();
                        }, function (err) {
                            console.log(err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CompletarRegistroPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CompletarRegistroPage.prototype.getPicture = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            quality: 100
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.image = "data:image/jpeg;base64," + imageData;
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    CompletarRegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-completar-registro',
            template: __webpack_require__(/*! ./completar-registro.page.html */ "./src/app/pages/completar-registro/completar-registro.page.html"),
            styles: [__webpack_require__(/*! ./completar-registro.page.scss */ "./src/app/pages/completar-registro/completar-registro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_completar_registro_service__WEBPACK_IMPORTED_MODULE_3__["CompletarRegistroService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__["WebView"]])
    ], CompletarRegistroPage);
    return CompletarRegistroPage;
}());



/***/ }),

/***/ "./src/app/services/completar-registro.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/completar-registro.service.ts ***!
  \********************************************************/
/*! exports provided: CompletarRegistroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletarRegistroService", function() { return CompletarRegistroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");






var CompletarRegistroService = /** @class */ (function () {
    function CompletarRegistroService(afs, afAuth) {
        this.afs = afs;
        this.afAuth = afAuth;
    }
    CompletarRegistroService.prototype.getInquilinoAdmin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.snapshotChangesSubscription = _this.afs.
                collection('inquilino-registrado').snapshotChanges();
            resolve(_this.snapshotChangesSubscription);
        });
    };
    CompletarRegistroService.prototype.getInquilino = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.user.subscribe(function (currentUser) {
                if (currentUser) {
                    _this.snapshotChangesSubscription = _this.afs.
                        collection('inquilino-registrado', function (ref) { return ref.where('userId', '==', currentUser.uid); }).snapshotChanges();
                    resolve(_this.snapshotChangesSubscription);
                }
            });
        });
    };
    CompletarRegistroService.prototype.getInquilinoId = function (inquilinoId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.snapshotChangesSubscription = _this.afs.doc('/inquilino-registrado/' + inquilinoId).valueChanges()
                .subscribe(function (snapshots) {
                resolve(snapshots);
            }, function (err) {
                reject(err);
            });
        });
    };
    CompletarRegistroService.prototype.unsubscribeOnLogOut = function () {
        //remember to unsubscribe from the snapshotChanges
        this.snapshotChangesSubscription.unsubscribe();
    };
    CompletarRegistroService.prototype.updateRegistroInquilino = function (registroInquilinoKey, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('update-registroInquilinoKey', registroInquilinoKey);
            console.log('update-registroInquilinoKey', value);
            _this.afs.collection('inquilino-registrado').doc(registroInquilinoKey).set(value)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    CompletarRegistroService.prototype.deleteRegistroInquilino = function (registroInquilinoKey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('delete-registroInquilinoKey', registroInquilinoKey);
            _this.afs.collection('inquilino-registrado').doc(registroInquilinoKey).delete()
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    CompletarRegistroService.prototype.createInquilinoPerfil = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
            _this.afs.collection('inquilino-registrado').add({
                nombre: value.nombre,
                apellido: value.apellido,
                email: value.email,
                fechaNacimiento: value.fechaNacimiento,
                image: value.image,
                userId: currentUser.uid,
            })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    CompletarRegistroService.prototype.encodeImageUri = function (imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext('2d');
        var img = new Image();
        img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL('image/jpeg');
            callback(dataURL);
        };
        img.src = imageUri;
    };
    ;
    CompletarRegistroService.prototype.uploadImage = function (imageURI, randomId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref();
            var imageRef = storageRef.child('image').child(randomId);
            _this.encodeImageUri(imageURI, function (image64) {
                imageRef.putString(image64, 'data_url')
                    .then(function (snapshot) {
                    snapshot.ref.getDownloadURL()
                        .then(function (res) { return resolve(res); });
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    CompletarRegistroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], CompletarRegistroService);
    return CompletarRegistroService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-completar-registro-completar-registro-module.js.map