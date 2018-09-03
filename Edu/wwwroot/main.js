(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/*!****************************************************************!*\
  !*** ./ClientApp/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app-routing.module.ts":
/*!*********************************************!*\
  !*** ./ClientApp/app/app-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_human_human_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/human/human.component */ "./ClientApp/app/models/human/human.component.ts");
/* harmony import */ var _shared_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/main-page/main-page.component */ "./ClientApp/app/shared/main-page/main-page.component.ts");
/* harmony import */ var _models_human_human_details_human_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/human/human-details/human-details.component */ "./ClientApp/app/models/human/human-details/human-details.component.ts");
/* harmony import */ var _models_human_human_edit_human_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/human/human-edit/human-edit.component */ "./ClientApp/app/models/human/human-edit/human-edit.component.ts");
/* harmony import */ var _models_human_human_add_human_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/human/human-add/human-add.component */ "./ClientApp/app/models/human/human-add/human-add.component.ts");
/* harmony import */ var _shared_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/login-page/login-page.component */ "./ClientApp/app/shared/login-page/login-page.component.ts");
/* harmony import */ var _guards_routing_auth_route_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/routing/auth-route.guard */ "./ClientApp/app/guards/routing/auth-route.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: "", canActivate: [_guards_routing_auth_route_guard__WEBPACK_IMPORTED_MODULE_8__["AuthRouteGuard"]], children: [
            { path: "", component: _shared_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
            { path: "humans", component: _models_human_human_component__WEBPACK_IMPORTED_MODULE_2__["HumanComponent"] },
            { path: "humans/details/:id", component: _models_human_human_details_human_details_component__WEBPACK_IMPORTED_MODULE_4__["HumanDetailsComponent"] },
            { path: "humans/edit/:id", component: _models_human_human_edit_human_edit_component__WEBPACK_IMPORTED_MODULE_5__["HumanEditComponent"] },
            { path: "humans/add", component: _models_human_human_add_human_add_component__WEBPACK_IMPORTED_MODULE_6__["HumanAddComponent"] }
        ]
    },
    { path: "login", component: _shared_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"] },
    { path: "**", redirectTo: "/", pathMatch: "full" }
];
var routerModuleWithProviders = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [routerModuleWithProviders],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./ClientApp/app/app.component.css":
/*!*****************************************!*\
  !*** ./ClientApp/app/app.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/*!******************************************!*\
  !*** ./ClientApp/app/app.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"20\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Edu App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./ClientApp/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./ClientApp/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./ClientApp/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_human_human_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/human/human.component */ "./ClientApp/app/models/human/human.component.ts");
/* harmony import */ var _services_human_human_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/human/human.service */ "./ClientApp/app/services/human/human.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/main-page/main-page.component */ "./ClientApp/app/shared/main-page/main-page.component.ts");
/* harmony import */ var _models_human_human_details_human_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/human/human-details/human-details.component */ "./ClientApp/app/models/human/human-details/human-details.component.ts");
/* harmony import */ var _models_human_human_edit_human_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/human/human-edit/human-edit.component */ "./ClientApp/app/models/human/human-edit/human-edit.component.ts");
/* harmony import */ var _models_human_human_add_human_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models/human/human-add/human-add.component */ "./ClientApp/app/models/human/human-add/human-add.component.ts");
/* harmony import */ var _shared_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/login-page/login-page.component */ "./ClientApp/app/shared/login-page/login-page.component.ts");
/* harmony import */ var _services_auth_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth/interceptor/auth.interceptor */ "./ClientApp/app/services/auth/interceptor/auth.interceptor.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth/auth.service */ "./ClientApp/app/services/auth/auth.service.ts");
/* harmony import */ var _guards_routing_auth_route_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/routing/auth-route.guard */ "./ClientApp/app/guards/routing/auth-route.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _models_human_human_component__WEBPACK_IMPORTED_MODULE_5__["HumanComponent"],
                _shared_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"],
                _models_human_human_details_human_details_component__WEBPACK_IMPORTED_MODULE_9__["HumanDetailsComponent"],
                _models_human_human_edit_human_edit_component__WEBPACK_IMPORTED_MODULE_10__["HumanEditComponent"],
                _models_human_human_add_human_add_component__WEBPACK_IMPORTED_MODULE_11__["HumanAddComponent"],
                _shared_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__["LoginPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [
                _services_human_human_service__WEBPACK_IMPORTED_MODULE_6__["HumanService"],
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                _guards_routing_auth_route_guard__WEBPACK_IMPORTED_MODULE_15__["AuthRouteGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _services_auth_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"], multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/guards/routing/auth-route.guard.ts":
/*!**********************************************************!*\
  !*** ./ClientApp/app/guards/routing/auth-route.guard.ts ***!
  \**********************************************************/
/*! exports provided: AuthRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRouteGuard", function() { return AuthRouteGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./ClientApp/app/services/auth/auth.service.ts");
/* harmony import */ var _shared_utils_base64_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/base64.util */ "./ClientApp/app/shared/utils/base64.util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthRouteGuard = /** @class */ (function () {
    function AuthRouteGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthRouteGuard.prototype.canActivate = function () {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(["/login"], { queryParams: { "from": _shared_utils_base64_util__WEBPACK_IMPORTED_MODULE_3__["Base64Util"].toBase64Url(window.location.pathname) } });
            return false;
        }
        return true;
    };
    AuthRouteGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthRouteGuard);
    return AuthRouteGuard;
}());



/***/ }),

/***/ "./ClientApp/app/models/human/human-add/human-add.component.css":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/models/human/human-add/human-add.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n  div button {\r\n    display: block;\r\n    margin: auto;\r\n  }\r\n\r\n  label {\r\n  display: block;\r\n  margin-left: 0px;\r\n  padding-left: 0px;\r\n}\r\n\r\n  button {\r\n  display: block;\r\n  margin: auto;\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/models/human/human-add/human-add.component.html":
/*!***********************************************************************!*\
  !*** ./ClientApp/app/models/human/human-add/human-add.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <label>Name: <input type=\"text\" [(ngModel)]=\"human.name\"></label>\r\n  <label>Date of Birth: <input type=\"date\" [(ngModel)]=\"human.dateOfBirth\"></label>\r\n  <label>ID: <input disabled type=\"text\" value=\"will be generated\"></label>\r\n  <button [disabled]=\"!canAdd()\" (click)=\"addHuman()\">Add</button>\r\n  <p>{{message}}</p>\r\n</div>\r\n<button (click)=\"location.back()\">Go back</button>\r\n"

/***/ }),

/***/ "./ClientApp/app/models/human/human-add/human-add.component.ts":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/models/human/human-add/human-add.component.ts ***!
  \*********************************************************************/
/*! exports provided: HumanAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumanAddComponent", function() { return HumanAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_human_human_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/human/human.service */ "./ClientApp/app/services/human/human.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HumanAddComponent = /** @class */ (function () {
    function HumanAddComponent(humanService, router, location) {
        this.humanService = humanService;
        this.router = router;
        this.location = location;
        this.message = "";
        this.human = {
            id: undefined,
            name: undefined,
            dateOfBirth: undefined
        };
    }
    HumanAddComponent.prototype.ngOnInit = function () {
    };
    HumanAddComponent.prototype.addHuman = function () {
        var _this = this;
        if (!this.canAdd()) {
            return;
        }
        this.humanService.createHuman(this.human).subscribe(function (data) {
            if (data) {
                _this.human = data;
                _this.message = "Item added! Going back to the list...";
                _this.router.navigateByUrl("/humans");
            }
            else {
                _this.message = "Invalid data submitted! Reloading page...";
                _this.router.navigateByUrl(_this.router.url);
            }
        });
    };
    HumanAddComponent.prototype.canAdd = function () {
        return ((this.human.name != undefined) && (this.human.dateOfBirth != undefined));
    };
    HumanAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-human-add',
            template: __webpack_require__(/*! ./human-add.component.html */ "./ClientApp/app/models/human/human-add/human-add.component.html"),
            styles: [__webpack_require__(/*! ./human-add.component.css */ "./ClientApp/app/models/human/human-add/human-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_human_human_service__WEBPACK_IMPORTED_MODULE_1__["HumanService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], HumanAddComponent);
    return HumanAddComponent;
}());



/***/ }),

/***/ "./ClientApp/app/models/human/human-details/human-details.component.css":
/*!******************************************************************************!*\
  !*** ./ClientApp/app/models/human/human-details/human-details.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\ndiv button{\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\nlabel{\r\n  display: block;\r\n  margin-left: 0px;\r\n  padding-left: 0px;\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/models/human/human-details/human-details.component.html":
/*!*******************************************************************************!*\
  !*** ./ClientApp/app/models/human/human-details/human-details.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <label>Name: {{human?.name}}</label>\r\n  <label>Date of Birth: {{human?.dateOfBirth | date:'mediumDate'}}</label>\r\n  <label>ID: {{human?.id}}</label>\r\n  <button routerLink=\"/humans/edit/{{human?.id}}\">Edit this</button>\r\n</div>\r\n<button (click)=\"location.back()\">Go back</button>\r\n"

/***/ }),

/***/ "./ClientApp/app/models/human/human-details/human-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/models/human/human-details/human-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HumanDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumanDetailsComponent", function() { return HumanDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_human_human_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/human/human.service */ "./ClientApp/app/services/human/human.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HumanDetailsComponent = /** @class */ (function () {
    function HumanDetailsComponent(humanService, route, location) {
        this.humanService = humanService;
        this.route = route;
        this.location = location;
    }
    HumanDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var idString = this.route.snapshot.paramMap.get("id");
        if (idString == null) {
            this.location.back();
            return;
        }
        var id = Number.parseInt(idString);
        if (!Number.isInteger(id)) {
            this.location.back();
            return;
        }
        if (id == 0) {
            this.location.back();
            return;
        }
        this.humanService.getHuman(id).subscribe(function (data) {
            _this.human = data;
        }, function (error) {
            _this.location.back();
        });
    };
    HumanDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-human-details',
            template: __webpack_require__(/*! ./human-details.component.html */ "./ClientApp/app/models/human/human-details/human-details.component.html"),
            styles: [__webpack_require__(/*! ./human-details.component.css */ "./ClientApp/app/models/human/human-details/human-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_human_human_service__WEBPACK_IMPORTED_MODULE_2__["HumanService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], HumanDetailsComponent);
    return HumanDetailsComponent;
}());



/***/ }),

/***/ "./ClientApp/app/models/human/human-edit/human-edit.component.css":
/*!************************************************************************!*\
  !*** ./ClientApp/app/models/human/human-edit/human-edit.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n  div button {\r\n    display: block;\r\n    margin: auto;\r\n  }\r\n\r\n  label {\r\n  display: block;\r\n  margin-left: 0px;\r\n  padding-left: 0px;\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/models/human/human-edit/human-edit.component.html":
/*!*************************************************************************!*\
  !*** ./ClientApp/app/models/human/human-edit/human-edit.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <label>Name: <input type=\"text\" [(ngModel)]=\"human.name\"></label>\r\n  <label>Date of Birth: <input type=\"date\" [(ngModel)]=\"human.dateOfBirth\"></label>\r\n  <label>ID: <input disabled type=\"number\" value=\"{{human.id}}\"></label>\r\n  <button [disabled]=\"!loaded\" (click)=\"save()\">Save</button>\r\n  <p>{{responseString}}</p>\r\n</div>\r\n<button (click)=\"location.back()\">Go back</button>\r\n"

/***/ }),

/***/ "./ClientApp/app/models/human/human-edit/human-edit.component.ts":
/*!***********************************************************************!*\
  !*** ./ClientApp/app/models/human/human-edit/human-edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: HumanEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumanEditComponent", function() { return HumanEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_human_human_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/human/human.service */ "./ClientApp/app/services/human/human.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HumanEditComponent = /** @class */ (function () {
    function HumanEditComponent(route, location, humanService, router) {
        this.route = route;
        this.location = location;
        this.humanService = humanService;
        this.router = router;
        this.human = {
            name: undefined,
            dateOfBirth: undefined,
            id: undefined
        };
        this.loaded = false;
        this.responseString = "";
    }
    HumanEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var idString = this.route.snapshot.paramMap.get("id");
        if (idString == null) {
            this.location.back();
            return;
        }
        var id = Number.parseInt(idString);
        if (!Number.isInteger(id)) {
            this.location.back();
            return;
        }
        if (id == 0) {
            this.location.back();
            return;
        }
        this.humanService.getHuman(id).subscribe(function (data) {
            _this.loadHuman(data);
            _this.loaded = true;
        }, function (error) {
            _this.location.back();
        });
    };
    HumanEditComponent.prototype.save = function () {
        var _this = this;
        if (!this.loaded) {
            return;
        }
        this.humanService.updateHuman(this.human).subscribe(function (data) {
            _this.loadHuman(data);
            _this.responseString = "Successful update!";
        }, function (error) {
            _this.responseString = "Update failed! Reloading!";
            _this.router.navigateByUrl(_this.router.url);
        });
    };
    HumanEditComponent.prototype.loadHuman = function (data) {
        this.human = data;
        this.human.dateOfBirth = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(this.human.dateOfBirth, "yyyy-MM-dd", "en_US");
    };
    HumanEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-human-edit',
            template: __webpack_require__(/*! ./human-edit.component.html */ "./ClientApp/app/models/human/human-edit/human-edit.component.html"),
            styles: [__webpack_require__(/*! ./human-edit.component.css */ "./ClientApp/app/models/human/human-edit/human-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _services_human_human_service__WEBPACK_IMPORTED_MODULE_3__["HumanService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HumanEditComponent);
    return HumanEditComponent;
}());



/***/ }),

/***/ "./ClientApp/app/models/human/human.component.css":
/*!********************************************************!*\
  !*** ./ClientApp/app/models/human/human.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/models/human/human.component.html":
/*!*********************************************************!*\
  !*** ./ClientApp/app/models/human/human.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>List of Humans</h2>\r\n<div>\r\n  <div>\r\n    <h3>Search by:</h3>\r\n  </div>\r\n\r\n  <label>\r\n    Name:\r\n    <input (input)=\"humanFilter.name = $event.target.value; updateSearch()\" placeholder=\"name\">\r\n  </label>\r\n\r\n  <label>\r\n    Birth Date:\r\n    <input type=\"date\" (input)=\"humanFilter.dateOfBirth = $event.target.value; updateSearch()\" placeholder=\"1999-01-01\">\r\n  </label>\r\n\r\n  <label>\r\n    ID:\r\n    <input (input)=\"humanFilter.id = $event.target.value; updateSearch()\" placeholder=\"1\">\r\n  </label>\r\n</div>\r\n\r\n<ul>\r\n  <li *ngFor=\"let item of searchResults\">\r\n    <a routerLink=\"details/{{item.id}}\">\r\n      <label>\r\n        ID: {{item.id}}\r\n      </label>\r\n      <label>\r\n        Name: {{item.name}}\r\n      </label>\r\n      <label>\r\n        Birth Date: {{item.dateOfBirth | date:'mediumDate'}}\r\n      </label>\r\n    </a>\r\n  </li>\r\n</ul>\r\n<button routerLink=\"add\">Add new</button>\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/models/human/human.component.ts":
/*!*******************************************************!*\
  !*** ./ClientApp/app/models/human/human.component.ts ***!
  \*******************************************************/
/*! exports provided: HumanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumanComponent", function() { return HumanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_human_human_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/human/human.service */ "./ClientApp/app/services/human/human.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HumanComponent = /** @class */ (function () {
    function HumanComponent(humanService) {
        this.humanService = humanService;
        this.humanFilter = {
            id: undefined,
            name: undefined,
            dateOfBirth: undefined
        };
        this.searchResults = [];
    }
    HumanComponent.prototype.ngOnInit = function () {
        this.updateSearch();
    };
    HumanComponent.prototype.updateSearch = function () {
        var _this = this;
        this.humanService.searchHumans(this.humanFilter.id, this.humanFilter.name, this.humanFilter.dateOfBirth)
            .subscribe(function (data) {
            _this.searchResults = data;
        }, function (error) {
            if (error instanceof Error) {
                console.log("Client-side error: " + error.name + " - " + error.message);
            }
            else {
                console.log("Server-side error: " + error.error);
            }
            _this.searchResults = [];
        });
    };
    HumanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-human',
            template: __webpack_require__(/*! ./human.component.html */ "./ClientApp/app/models/human/human.component.html"),
            styles: [__webpack_require__(/*! ./human.component.css */ "./ClientApp/app/models/human/human.component.css")]
        }),
        __metadata("design:paramtypes", [_services_human_human_service__WEBPACK_IMPORTED_MODULE_1__["HumanService"]])
    ], HumanComponent);
    return HumanComponent;
}());



/***/ }),

/***/ "./ClientApp/app/services/auth/auth.service.ts":
/*!*****************************************************!*\
  !*** ./ClientApp/app/services/auth/auth.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var loginUrl = "api/account/login";
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.isAuthenticated = function () {
        var encodedToken = localStorage.getItem("token");
        if (!encodedToken) {
            return false;
        }
        var token = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(encodedToken);
        if (!token) {
            return false;
        }
        var expiryDate = token.exp * 1000; //Date.now() returns number of millis, not seconds
        if (Date.now() > expiryDate) {
            return false;
        }
        return true;
    };
    AuthService.prototype.tryAuthenticate = function (email, password) {
        var _this = this;
        var successObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.http.post(loginUrl, { email: email, password: password }, { responseType: "text" }).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    localStorage.setItem("token", data);
                    observer.next(true);
                    return [2 /*return*/];
                });
            }); }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log(error);
                    observer.next(false);
                    return [2 /*return*/];
                });
            }); });
        });
        return successObservable;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./ClientApp/app/services/auth/interceptor/auth.interceptor.ts":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/services/auth/interceptor/auth.interceptor.ts ***!
  \*********************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var authedRequest = request.clone({
            headers: request.headers.set("Authorization", "Bearer " + localStorage.getItem("token"))
        });
        return next.handle(authedRequest);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./ClientApp/app/services/human/human.service.ts":
/*!*******************************************************!*\
  !*** ./ClientApp/app/services/human/human.service.ts ***!
  \*******************************************************/
/*! exports provided: HumanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumanService", function() { return HumanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./ClientApp/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var listApiUrl = "api/human/list";
var getApiUrl = "api/human/get";
var updateApiUrl = "api/human/update";
var addApiUrl = "api/human/add";
var HumanService = /** @class */ (function () {
    function HumanService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    HumanService.prototype.searchHumans = function (id, name, dateOfBirth) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("id", id ? id.toString() : "")
            .set("name", name || "")
            .set("dateOfBirth", dateOfBirth || "");
        return this.http.get(listApiUrl, { params: params });
    };
    HumanService.prototype.getHuman = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("id", id ? id.toString() : "");
        return this.http.get(getApiUrl, { params: params });
    };
    HumanService.prototype.updateHuman = function (human) {
        return this.http.post(updateApiUrl, human, { observe: "body" });
    };
    HumanService.prototype.createHuman = function (human) {
        return this.http.put(addApiUrl, human);
    };
    HumanService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HumanService);
    return HumanService;
}());



/***/ }),

/***/ "./ClientApp/app/shared/login-page/login-page.component.css":
/*!******************************************************************!*\
  !*** ./ClientApp/app/shared/login-page/login-page.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/shared/login-page/login-page.component.html":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/shared/login-page/login-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <label>E-Mail: <input type=\"text\" [(ngModel)]=\"email\"></label>\r\n    <label>Password: <input type=\"password\" [(ngModel)]=\"password\"></label>\r\n    <button [disabled]=\"!canLogin()\" (click)=\"login()\">Login</button>\r\n    <p>{{responseString}}</p>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/shared/login-page/login-page.component.ts":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/shared/login-page/login-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./ClientApp/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_base64_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/base64.util */ "./ClientApp/app/shared/utils/base64.util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(authService, router, currentRoute) {
        this.authService = authService;
        this.router = router;
        this.currentRoute = currentRoute;
        this.previousLocation = "";
        this.responseString = '';
        this.email = '';
        this.password = '';
    }
    LoginPageComponent.prototype.canLogin = function () {
        if (!this.password || !this.email) {
            return false;
        }
        return true;
    };
    LoginPageComponent.prototype.login = function () {
        var _this = this;
        this.responseString = "Logging you in...";
        this.authService.tryAuthenticate(this.email, this.password)
            .subscribe(function (success) {
            if (success) {
                _this.responseString = "Successfull login!";
                _this.goToPreviousPage();
                return;
            }
            _this.responseString = "Invalid username or password!";
            _this.email = "";
            _this.password = "";
        });
    };
    LoginPageComponent.prototype.ngOnInit = function () {
        this.previousLocation = this.currentRoute.snapshot.queryParamMap.get("from");
        if (!this.previousLocation) {
            this.previousLocation = "";
        }
        this.previousLocation = _utils_base64_util__WEBPACK_IMPORTED_MODULE_3__["Base64Util"].fromBase64Url(this.previousLocation);
        if (this.authService.isAuthenticated()) {
            this.goToPreviousPage();
        }
    };
    LoginPageComponent.prototype.goToPreviousPage = function () {
        this.router.navigate([this.previousLocation]);
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./ClientApp/app/shared/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./ClientApp/app/shared/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./ClientApp/app/shared/main-page/main-page.component.css":
/*!****************************************************************!*\
  !*** ./ClientApp/app/shared/main-page/main-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n  display: block;\r\n  margin: auto;\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/shared/main-page/main-page.component.html":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/shared/main-page/main-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"humans\"><h1>Humans</h1></a>\r\n"

/***/ }),

/***/ "./ClientApp/app/shared/main-page/main-page.component.ts":
/*!***************************************************************!*\
  !*** ./ClientApp/app/shared/main-page/main-page.component.ts ***!
  \***************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./ClientApp/app/shared/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./ClientApp/app/shared/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./ClientApp/app/shared/utils/base64.util.ts":
/*!***************************************************!*\
  !*** ./ClientApp/app/shared/utils/base64.util.ts ***!
  \***************************************************/
/*! exports provided: Base64Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64Util", function() { return Base64Util; });
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_0__);

var Base64Util = /** @class */ (function () {
    function Base64Util() {
    }
    Base64Util.toBase64 = function (str) {
        return js_base64__WEBPACK_IMPORTED_MODULE_0__["Base64"].encode(str);
    };
    Base64Util.fromBase64 = function (str) {
        return js_base64__WEBPACK_IMPORTED_MODULE_0__["Base64"].decode(str);
    };
    Base64Util.toBase64Url = function (str) {
        str = this.toBase64(str);
        return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
    };
    Base64Util.fromBase64Url = function (str) {
        str = (str + '===').slice(0, str.length + (str.length % 4));
        str = str.replace(/-/g, '+').replace(/_/g, '/');
        return this.fromBase64(str);
    };
    return Base64Util;
}());



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vlad.ardelean\source\repos\Edu\Edu\ClientApp\main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map