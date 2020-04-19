(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Inicio de Sesión</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div  text-center>\r\n        <h4 text-center>Iniciar Sección</h4>\r\n      </div>\r\n    \r\n      <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"tryLogin(validations_form.value)\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" color=\"ion-color-dark\">Correo Electronico</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"correo\" formControlName=\"email\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n            <div class=\"error-message\" *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-item>\r\n          <ion-label position=\"floating\" color=\"ion-color-dark\">Contraseña</ion-label>\r\n          <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n            <div class=\"error-message\" *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" [disabled]=\"!validations_form.valid\" color=\"primary\">Entrar</ion-button>\r\n        <label class=\"error-message\">{{errorMessage}}</label>\r\n\r\n        <ion-item text-center>\r\n            <ion-button expand=\"block\" *ngIf=\"!passReset && validations_form.controls.email.valid\" (click)=\"resetPassword()\">Olvidate tu contraseña <br> {{validations_form.value.email}}</ion-button>\r\n            <p *ngIf=\"passReset\" >Reset enviado. Revisa tu email y sigue las instruciones.</p>    \r\n        </ion-item>\r\n      </form>\r\n        <ion-button (click)=\"showFingerprintAuthDlg()\">TOUCH</ion-button>\r\n        <br>\r\n        <input [(ngModel)]=\"correo\" type=\"text\">\r\n        <ion-button (click)=\"tryLoginTouch(correo)\">Login Touch!!</ion-button>\r\n        <ion-button (click)=\"tryLoginTouch('pepito@gmail.com')\">Login Touch</ion-button>\r\n\r\n      <p class=\"go-to-register\">\r\n      No tienes una Cuenta? <ion-button size=\"small\" (click)=\"goRegisterPage()\">Regístrate.</ion-button>\r\n    </p>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-login body {\n  padding-top: 4.2rem;\n  padding-bottom: 4.2rem;\n  background: rgba(0, 0, 0, 0.76); }\n\na {\n  text-decoration: none !important; }\n\nh1, h2, h3 {\n  font-family: 'Kaushan Script', cursive; }\n\n.myform {\n  position: relative;\n  display: flex;\n  padding: 1rem;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.1rem;\n  outline: 0;\n  max-width: 500px; }\n\n.tx-tfm {\n  text-transform: uppercase; }\n\n.mybtn {\n  border-radius: 50px; }\n\n.login-or {\n  position: relative;\n  color: #aaa;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.span-or {\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: -2px;\n  margin-left: -25px;\n  background-color: #fff;\n  width: 50px;\n  text-align: center; }\n\n.hr-or {\n  height: 1px;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\n.google {\n  color: #666;\n  width: 100%;\n  height: 40px;\n  text-align: center;\n  outline: none;\n  border: 1px solid lightgrey; }\n\nform .error {\n  color: #ff0000; }\n\n#second {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXHBvY3NcXHN0YXJ0ZWRjcnVkLWlvbmljLWZpcmVzdG9yZS9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxtQkFBa0I7RUFDeEIsc0JBQXFCO0VBQ3JCLCtCQUE4QixFQUFBOztBQUV4QjtFQUNDLGdDQUErQixFQUFBOztBQUUvQjtFQUNBLHNDQUFzQyxFQUFBOztBQUVyQztFQUNSLGtCQUFrQjtFQUVsQixhQUFhO0VBQ2IsYUFBYTtFQUViLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsb0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBRVQ7RUFDQSx5QkFBd0IsRUFBQTs7QUFFeEI7RUFDQSxtQkFBa0IsRUFBQTs7QUFHbEI7RUFDQSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUVwQjtFQUNBLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFbEI7RUFDQSxXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLDZCQUE2QixFQUFBOztBQUU3QjtFQUNBLFdBQVU7RUFDVixXQUFVO0VBQ1YsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osMkJBQTJCLEVBQUE7O0FBRTFCO0VBQ0QsY0FBYyxFQUFBOztBQUVkO0VBQVEsYUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWxvZ2luIGJvZHl7XHJcbiAgICAgICAgcGFkZGluZy10b3A6NC4ycmVtO1xyXG5cdFx0cGFkZGluZy1ib3R0b206NC4ycmVtO1xyXG5cdFx0YmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNzYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhe1xyXG4gICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGgxLGgyLGgze1xyXG4gICAgICAgICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAgLm15Zm9ybXtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHBhZGRpbmc6IDFyZW07XHJcblx0XHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4yKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEuMXJlbTtcclxuXHRcdG91dGxpbmU6IDA7XHJcblx0XHRtYXgtd2lkdGg6IDUwMHB4O1xyXG5cdFx0IH1cclxuICAgICAgICAgLnR4LXRmbXtcclxuICAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5teWJ0bntcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czo1MHB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgIC5sb2dpbi1vciB7XHJcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuc3Bhbi1vciB7XHJcbiAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmhyLW9yIHtcclxuICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuZ29vZ2xlIHtcclxuICAgICAgICAgY29sb3I6IzY2NjtcclxuICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAgZm9ybSAuZXJyb3Ige1xyXG4gICAgICAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAjc2Vjb25ke2Rpc3BsYXk6bm9uZTt9Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ "./node_modules/@ionic-native/fingerprint-aio/ngx/index.js");
/* harmony import */ var src_app_services_touch_id_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/touch-id.service */ "./src/app/services/touch-id.service.ts");







var LoginPage = /** @class */ (function () {
    function LoginPage(authService, formBuilder, router, faio, finger) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.faio = faio;
        this.finger = finger;
        this.errorMessage = '';
        this.passReset = false;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Correo requerido.' },
                { type: 'pattern', message: 'Por favor ingresar un correo valido.' }
            ],
            'password': [
                { type: 'required', message: 'Contraseña requerida.' },
                { type: 'minlength', message: 'La contraseña debe tener mas de 5 digitos.' }
            ]
        };
    }
    LoginPage.prototype.showFingerprintAuthDlg = function () {
        this.faio.show({
            title: 'Biometric Authentication',
            subtitle: 'Coolest Plugin ever',
            description: 'Please authenticate',
            fallbackButtonTitle: 'Use Backup',
            // When disableBackup is true defaults to "Cancel"
            disableBackup: true,
        })
            .then(function (result) { return console.log(result); })
            .catch(function (error) { return console.log(error); });
    };
    LoginPage.prototype.ngOnInit = function () {
        this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
    };
    LoginPage.prototype.get = function (key) {
        var _this = this;
        key = this.correo;
        this.finger.verify(key)
            .then(function (datos) {
            _this.datoGuardado = datos;
            console.log("La informaci\u00F3n guardada es: " + _this.datoGuardado);
        })
            .catch(function (err) {
            console.error("Se ha producido un error al consultar la informaci\u00F3n guardada: " + err);
        });
    };
    LoginPage.prototype.tryLoginTouch = function (em) {
        var _this = this;
        this.finger.verify(em)
            .then(function (datos) {
            alert('dato guardado' + datos);
            var pass = datos;
            _this.authService.doLoginTo(em, pass)
                .then(function (res) {
                _this.router.navigate(['/tabs/tab1']);
            }, function (err) {
                _this.errorMessage = err.message;
                console.log(err);
            });
        })
            .catch(function (err) {
            console.error("Se ha producido un error al consultar la informaci\u00F3n guardada: " + err);
        });
    };
    LoginPage.prototype.tryLogin = function (value) {
        var _this = this;
        this.authService.doLogin(value)
            .then(function (res) {
            _this.router.navigate(['/tabs/tab1']);
        }, function (err) {
            _this.errorMessage = err.message;
            console.log(err);
        });
    };
    LoginPage.prototype.goRegisterPage = function () {
        this.router.navigate(['/registro']);
    };
    LoginPage.prototype.resetPassword = function () {
        var _this = this;
        this.authService.resetPassword(this.validations_form.value['email'])
            .then(function () { return _this.passReset = true; });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__["FingerprintAIO"],
            src_app_services_touch_id_service__WEBPACK_IMPORTED_MODULE_6__["TouchIdService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map