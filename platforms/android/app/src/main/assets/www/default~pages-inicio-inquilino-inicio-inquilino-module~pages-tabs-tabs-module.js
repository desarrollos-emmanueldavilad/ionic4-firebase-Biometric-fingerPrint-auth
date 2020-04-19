(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-inicio-inquilino-inicio-inquilino-module~pages-tabs-tabs-module"],{

/***/ "./src/app/pages/inicio-inquilino/inicio-inquilino.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/inicio-inquilino/inicio-inquilino.module.ts ***!
  \*******************************************************************/
/*! exports provided: InicioInquilinoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioInquilinoPageModule", function() { return InicioInquilinoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inicio_inquilino_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio-inquilino.page */ "./src/app/pages/inicio-inquilino/inicio-inquilino.page.ts");
/* harmony import */ var _inicio_inquilino_resolve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inicio-inquilino.resolve */ "./src/app/pages/inicio-inquilino/inicio-inquilino.resolve.ts");








var routes = [
    {
        path: '',
        component: _inicio_inquilino_page__WEBPACK_IMPORTED_MODULE_6__["InicioInquilinoPage"],
        resolve: {
            data: _inicio_inquilino_resolve__WEBPACK_IMPORTED_MODULE_7__["InquilinoProfileResolver"]
        }
    }
];
var InicioInquilinoPageModule = /** @class */ (function () {
    function InicioInquilinoPageModule() {
    }
    InicioInquilinoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_inicio_inquilino_page__WEBPACK_IMPORTED_MODULE_6__["InicioInquilinoPage"]],
            providers: [_inicio_inquilino_resolve__WEBPACK_IMPORTED_MODULE_7__["InquilinoProfileResolver"]]
        })
    ], InicioInquilinoPageModule);
    return InicioInquilinoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/inicio-inquilino/inicio-inquilino.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/inicio-inquilino/inicio-inquilino.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>inicio-inquilino</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-content *ngIf=\"items\" class=\"list-mini-content\" padding>\r\n      <hr>\r\n      <div class=\"animated fadeIn fast \" text-center *ngFor=\"let item of items \">\r\n          <img src=\"{{item.payload.doc.data().image}} \" alt=\"Avatar \" style=\" border-radius: 50%; \">\r\n      </div>\r\n      <hr>\r\n      <div class=\"card bg-light mb-3 \" style=\"max-width: 18rem; font-family: Comfortaa \">\r\n          <div *ngIf=\"items.length> 0\" class=\"list-mini\">\r\n\r\n\r\n\r\n\r\n              <ion-list>\r\n                  <ul style=\"list-style: none;\" *ngFor=\"let item of items\">\r\n                      <ion-grid>\r\n                          <div text-center>\r\n                              <h3><i>{{item.payload.doc.data().nombre}}</i></h3>\r\n                          </div>\r\n                          <li>\r\n                              <ion-label color=\"ion-color-dark\">\r\n                                  <h5><i>Correo Electronico</i></h5>\r\n                              </ion-label>\r\n                              <ion-input type=\"text\" [readonly]=\"true\">\r\n                                  <p><i>{{item.payload.doc.data().email}}</i></p>\r\n                              </ion-input>\r\n                          </li>\r\n                      </ion-grid>\r\n                  </ul>\r\n              </ion-list>\r\n          </div>\r\n      </div>\r\n      <div *ngIf=\"items.length == 0\" class=\"empty-list\">\r\n          <ion-button type=\"button\" expand=\"block\" (click)=\"goCrearPerfil()\">Completar registro</ion-button>\r\n      </div>\r\n  </ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/inicio-inquilino/inicio-inquilino.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/inicio-inquilino/inicio-inquilino.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby1pbnF1aWxpbm8vaW5pY2lvLWlucXVpbGluby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/inicio-inquilino/inicio-inquilino.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/inicio-inquilino/inicio-inquilino.page.ts ***!
  \*****************************************************************/
/*! exports provided: InicioInquilinoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioInquilinoPage", function() { return InicioInquilinoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var InicioInquilinoPage = /** @class */ (function () {
    function InicioInquilinoPage(loadingCtrl, authService, router, route) {
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    InicioInquilinoPage.prototype.ngOnInit = function () {
        if (this.route && this.route.data) {
            this.getData();
        }
    };
    InicioInquilinoPage.prototype.getData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Espere un momento...'
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        this.route.data.subscribe(function (routeData) {
                            routeData['data'].subscribe(function (data) {
                                loading.dismiss();
                                _this.items = data;
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InicioInquilinoPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InicioInquilinoPage.prototype.goCrearPerfil = function () {
        this.router.navigate(['/completar-registro']);
    };
    InicioInquilinoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio-inquilino',
            template: __webpack_require__(/*! ./inicio-inquilino.page.html */ "./src/app/pages/inicio-inquilino/inicio-inquilino.page.html"),
            styles: [__webpack_require__(/*! ./inicio-inquilino.page.scss */ "./src/app/pages/inicio-inquilino/inicio-inquilino.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], InicioInquilinoPage);
    return InicioInquilinoPage;
}());



/***/ }),

/***/ "./src/app/pages/inicio-inquilino/inicio-inquilino.resolve.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/inicio-inquilino/inicio-inquilino.resolve.ts ***!
  \********************************************************************/
/*! exports provided: InquilinoProfileResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InquilinoProfileResolver", function() { return InquilinoProfileResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_completar_registro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/completar-registro.service */ "./src/app/services/completar-registro.service.ts");



var InquilinoProfileResolver = /** @class */ (function () {
    function InquilinoProfileResolver(inquilinoProfileService) {
        this.inquilinoProfileService = inquilinoProfileService;
    }
    InquilinoProfileResolver.prototype.resolve = function (route) {
        var reservas = route.paramMap.get('profileInfluencer');
        return this.inquilinoProfileService.getInquilino();
    };
    InquilinoProfileResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_completar_registro_service__WEBPACK_IMPORTED_MODULE_2__["CompletarRegistroService"]])
    ], InquilinoProfileResolver);
    return InquilinoProfileResolver;
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
//# sourceMappingURL=default~pages-inicio-inquilino-inicio-inquilino-module~pages-tabs-tabs-module.js.map