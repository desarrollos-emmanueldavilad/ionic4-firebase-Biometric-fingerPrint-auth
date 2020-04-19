(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-registro-module"],{

/***/ "./src/app/pages/registro/registro.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.module.ts ***!
  \***************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/pages/registro/registro.page.ts");







var routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]
    }
];
var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/registro/registro.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>registro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div text-center=\"\">\r\n        <h5>Registro de Inquilinos</h5>\r\n      </div>\r\n\r\n      <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"tryRegister(validations_form.value)\">\r\n\r\n      <ion-item>\r\n            <ion-label position=\"floating\" color=\"ion-color-dark\">Correo Electronico</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"email\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n              <div class=\"error-message\"\r\n                   *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n      \r\n      \r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"ion-color-dark\">Contraseña</ion-label>\r\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n              <div class=\"error-message\"\r\n                   *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"ion-color-dark\">Confirmar Contraseña</ion-label>\r\n            <ion-input type=\"password\" formControlName=\"confirmPassword\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.confirmPassword\">\r\n              <div class=\"error-message\"\r\n                   *ngIf=\"validations_form.get('confirmPassword').hasError(validation.type) && (validations_form.get('confirmPassword').dirty || validations_form.get('confirmPassword').touched)\">\r\n                <label class=\"error-message\">{{validation.message}}</label><br/>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n      \r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <div class=\"inner-wrapper\">\r\n                  <ion-label class=\"label label-ios\">\r\n                    <ion-checkbox class=\"check\" formControlName=\"check\" color=\"primary\" checked=\"false\"></ion-checkbox>\r\n                    <p class=\"terminos\"> Haciendo click aquì acepto los terminos y condicione.</p>\r\n      \r\n                  </ion-label>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n      \r\n          </ion-grid>\r\n          <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" [disabled]=\"!validations_form.valid\">Registrar\r\n          </ion-button>\r\n          <label class=\"error-message\">{{errorMessage}}</label>\r\n          <label class=\"success-message\">{{successMessage}}</label>\r\n        </form>\r\n        <p class=\"go-to-login\">Ya tienes una Cuenta? <a (click)=\"goLoginPage()\">Iniciar Sesión.</a></p>\r\n\r\n    \r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/registro/registro.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/registro/registro.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/registro/registro.page.ts ***!
  \*************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_validators_password_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/validators/password.validator */ "./src/app/validators/password.validator.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_services_touch_id_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/touch-id.service */ "./src/app/services/touch-id.service.ts");








var RegistroPage = /** @class */ (function () {
    function RegistroPage(authService, formBuilder, router, camera, finger) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.camera = camera;
        this.finger = finger;
        this.errorMessage = '';
        this.successMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Correo requerido.' },
                { type: 'pattern', message: 'Correo inválido.' }
            ],
            'password': [
                { type: 'required', message: 'Contraseña requerida.' },
                { type: 'minlength', message: 'Debe tener más de 5 dígitos.' }
            ],
            'confirmPassword': [
                { type: 'required', message: 'Contraseña requerida.' },
                { type: 'minlength', message: 'Debe tener más de 5 dígitos.' },
                { type: 'notMatch', message: 'Las contraseñas deben ser iguales.' }
            ]
        };
    }
    RegistroPage.prototype.ngOnInit = function () {
        this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                src_app_validators_password_validator__WEBPACK_IMPORTED_MODULE_5__["PasswordValidator"].MatchPassword
            ])),
            check: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    RegistroPage.prototype.saveData = function (form) {
        var _this = this;
        this.finger.available()
            .then(function (data) {
            _this.validations_form = form;
            _this.finger.add(form.value.name, form.value.data, true)
                .then(function (data) {
                console.log('data gu', data);
                _this.addedData = data;
                alert('Tu información se ha guardado correctamente');
                _this.validations_form.reset();
            })
                .catch(function (err) { return console.error('Se ha producido un error al guardar la información', err); });
        })
            .catch(function (err) { return console.log(err); });
    };
    RegistroPage.prototype.get = function (key) {
        var _this = this;
        this.finger.verify(key)
            .then(function (datos) {
            _this.datoGuardado = datos;
            console.log("La informaci\u00F3n guardada es: " + _this.datoGuardado);
        })
            .catch(function (err) {
            console.error("Se ha producido un error al consultar la informaci\u00F3n guardada: " + err);
        });
    };
    RegistroPage.prototype.clear = function (key) {
        this.finger.remove(key)
            .then(function (datos) {
            console.log('Datos eliminados:', datos);
            alert('Los datos se han eliminado');
        })
            .catch(function (err) { return console.error('Se ha producido un error al eliminar la información guardada', err); });
    };
    RegistroPage.prototype.tryRegister = function (value) {
        var _this = this;
        this.authService.doRegister(value)
            .then(function (res) {
            if (_this.finger.available()) {
                _this.finger.add(value.email, value.password, true)
                    .then(function (data) {
                    _this.addedData = data;
                    alert('Tu información se ha guardado correctamente');
                    _this.validations_form.reset();
                })
                    .catch(function (err) { return console.error('Se ha producido un error al guardar la información', err); });
                ;
            }
            console.log(res);
            _this.errorMessage = "Ocurrio un error al crear tu cuenta";
            _this.successMessage = "Tu Cuenta fue creada..";
            _this.validations_form.reset();
            _this.router.navigate(['/completar-registro']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
            _this.successMessage = "La contraseña o el correo no son correctos";
        });
    };
    RegistroPage.prototype.goLoginPage = function () {
        this.router.navigate(["/login"]);
    };
    RegistroPage.prototype.getPicture = function () {
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
    RegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.page.html */ "./src/app/pages/registro/registro.page.html"),
            styles: [__webpack_require__(/*! ./registro.page.scss */ "./src/app/pages/registro/registro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            src_app_services_touch_id_service__WEBPACK_IMPORTED_MODULE_7__["TouchIdService"]])
    ], RegistroPage);
    return RegistroPage;
}());



/***/ }),

/***/ "./src/app/validators/password.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/validators/password.validator.ts ***!
  \**************************************************/
/*! exports provided: PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    PasswordValidator.MatchPassword = function (AC) {
        var password = AC && AC.parent && AC.parent.controls['password'].value;
        var confirmPassword = AC && AC.value;
        if (password === confirmPassword) {
            return null;
        }
        else {
            return ({ 'notMatch': true });
        }
    };
    return PasswordValidator;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registro-registro-module.js.map