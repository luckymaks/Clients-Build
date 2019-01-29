(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-list-of-clients></app-list-of-clients>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
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
        this.title = 'AppClients';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clients_clients_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients/clients.module */ "./src/app/clients/clients.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _clients_clients_module__WEBPACK_IMPORTED_MODULE_4__["ClientsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clients/clients-detail/clients-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/clients/clients-detail/clients-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <div class=\"detail-content\">\n    <div class=\"image\">\n      <img src=\"{{user.avatar}}\" alt=\"Avatar\">\n    </div>\n    <div class=\"name_title\">\n      <div class=\"userName\">\n        <span>{{user.firstName}} {{user.lastName}}</span>\n      </div>\n      <div class=\"userContactInfo\">\n        <span class=\"contact\">\n          <span>Jobs:</span>\n          <span>{{user.title}} - {{user.company}}</span>\n        </span>\n        <span class=\"contact\">\n          <span>Contact:</span>\n          <span>Email: {{user.email}}</span>\n          <span>Phone: {{user.phone}}</span>\n        </span>\n        <span class=\"contact\">\n          <span>User address:</span>\n          <span>Country: {{user.country}}</span>\n          <span>City: {{user.city}}</span>\n          <span>Street: {{user.street}}</span>\n          <span>ZipCode: {{user.zipCode}}</span>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/clients/clients-detail/clients-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/clients/clients-detail/clients-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  font-family: cursive; }\n  :host .detail-content {\n    padding-left: 30px;\n    padding-top: 10px;\n    border-left: none;\n    width: 76.3vw;\n    height: 99.1vh;\n    position: fixed;\n    display: flex; }\n  :host .detail-content .image {\n      margin-right: 20px; }\n  :host .detail-content .image img {\n        border: 1px solid #676766;\n        border-radius: 50%; }\n  :host .detail-content .name_title .userContactInfo {\n      display: flex;\n      flex-direction: column; }\n  :host .detail-content .name_title .userContactInfo .contact {\n        display: flex;\n        flex-direction: column; }\n  :host .detail-content .name_title .userContactInfo .contact :first-child {\n          font-weight: bold; }\n  :host .detail-content .name_title .userName {\n      font-size: 20px;\n      font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9jbGllbnRzLWRldGFpbC9EOlxcc2l0ZVxcd3d3XFxBcHBDbGllbnRzL3NyY1xcYXBwXFxjbGllbnRzXFxjbGllbnRzLWRldGFpbFxcY2xpZW50cy1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBc0I7RUFDdEIsWUFBVztFQUNYLGFBQVk7RUFDWixxQkFBb0IsRUFrQ3JCO0VBdENEO0lBTUksbUJBQWtCO0lBQ2xCLGtCQUFpQjtJQUNqQixrQkFBaUI7SUFDakIsY0FBYTtJQUNiLGVBQWM7SUFDZCxnQkFBZTtJQUNmLGNBQWEsRUF5QmQ7RUFyQ0g7TUFjTSxtQkFBa0IsRUFLbkI7RUFuQkw7UUFnQlEsMEJBQXlCO1FBQ3pCLG1CQUFrQixFQUNuQjtFQWxCUDtNQXNCUSxjQUFhO01BQ2IsdUJBQXNCLEVBUXZCO0VBL0JQO1FBeUJVLGNBQWE7UUFDYix1QkFBc0IsRUFJdkI7RUE5QlQ7VUE0Qlksa0JBQWlCLEVBQ2xCO0VBN0JYO01BaUNRLGdCQUFlO01BQ2Ysa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnRzLWRldGFpbC9jbGllbnRzLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAuZGV0YWlsLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIHdpZHRoOiA3Ni4zdnc7XHJcbiAgICBoZWlnaHQ6IDk5LjF2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzY3Njc2NjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYW1lX3RpdGxlIHtcclxuICAgICAgLnVzZXJDb250YWN0SW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC5jb250YWN0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC51c2VyTmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/clients/clients-detail/clients-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/clients/clients-detail/clients-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ClientsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsDetailComponent", function() { return ClientsDetailComponent; });
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

var ClientsDetailComponent = /** @class */ (function () {
    function ClientsDetailComponent() {
    }
    ClientsDetailComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClientsDetailComponent.prototype, "user", void 0);
    ClientsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients-detail',
            template: __webpack_require__(/*! ./clients-detail.component.html */ "./src/app/clients/clients-detail/clients-detail.component.html"),
            styles: [__webpack_require__(/*! ./clients-detail.component.scss */ "./src/app/clients/clients-detail/clients-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientsDetailComponent);
    return ClientsDetailComponent;
}());



/***/ }),

/***/ "./src/app/clients/clients-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/clients/clients-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ClientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsRoutingModule", function() { return ClientsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clients_detail_clients_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients-detail/clients-detail.component */ "./src/app/clients/clients-detail/clients-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClientsRoutingModule = /** @class */ (function () {
    function ClientsRoutingModule() {
    }
    ClientsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    { path: 'users/:id', component: _clients_detail_clients_detail_component__WEBPACK_IMPORTED_MODULE_2__["ClientsDetailComponent"] }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClientsRoutingModule);
    return ClientsRoutingModule;
}());



/***/ }),

/***/ "./src/app/clients/clients.module.ts":
/*!*******************************************!*\
  !*** ./src/app/clients/clients.module.ts ***!
  \*******************************************/
/*! exports provided: ClientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return ClientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_of_clients_list_of_clients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-of-clients/list-of-clients.component */ "./src/app/clients/list-of-clients/list-of-clients.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _clients_detail_clients_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients-detail/clients-detail.component */ "./src/app/clients/clients-detail/clients-detail.component.ts");
/* harmony import */ var _clients_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clients-routing.module */ "./src/app/clients/clients-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search.pipe */ "./src/app/clients/search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ClientsModule = /** @class */ (function () {
    function ClientsModule() {
    }
    ClientsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _list_of_clients_list_of_clients_component__WEBPACK_IMPORTED_MODULE_2__["ListOfClientsComponent"],
                _clients_detail_clients_detail_component__WEBPACK_IMPORTED_MODULE_4__["ClientsDetailComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clients_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            exports: [_list_of_clients_list_of_clients_component__WEBPACK_IMPORTED_MODULE_2__["ListOfClientsComponent"]]
        })
    ], ClientsModule);
    return ClientsModule;
}());



/***/ }),

/***/ "./src/app/clients/list-of-clients/list-of-clients.component.html":
/*!************************************************************************!*\
  !*** ./src/app/clients/list-of-clients/list-of-clients.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leftCol\">\n  <div class=\"search\">\n    <label for=\"searchName\">Search user:</label>\n    <input id=\"searchName\" type=\"text\" [(ngModel)]=\"searchSrt\">\n  </div>\n  <div *ngFor=\"let userInfo of allInfo | search:searchSrt\"\n       [routerLink]=\"['/users', userInfo.firstName]\"\n       (click)=\"next(userInfo)\"\n       (click)=\"onSelect(userInfo)\"\n       [class.selected]=\"userInfo === selectedUser\"\n       class=\"leftColInfo\">\n    <img src=\"{{userInfo.avatar}}\" alt=\"Avatar\">\n    <div class=\"name_title\">\n      <div>\n        <span>{{userInfo.firstName}} {{userInfo.lastName}}</span>\n      </div>\n      <div>\n        <span>{{userInfo.title}}</span>\n      </div>\n    </div>\n  </div>\n</div>\n<router-outlet>\n  <app-clients-detail [user]=\"selectedUser\"></app-clients-detail>\n</router-outlet>\n"

/***/ }),

/***/ "./src/app/clients/list-of-clients/list-of-clients.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/clients/list-of-clients/list-of-clients.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: row;\n  font-family: cursive; }\n  :host .leftColInfo {\n    display: flex;\n    padding: 20px;\n    border: 1px solid #777978;\n    outline: none;\n    box-sizing: border-box;\n    z-index: 999;\n    width: 30vw; }\n  :host .leftColInfo img {\n      width: 64px;\n      height: 64px;\n      margin-right: 20px;\n      border: 1px solid #c5c5c5;\n      border-radius: 50%; }\n  :host .leftColInfo .name_title {\n      display: flex;\n      flex-direction: column;\n      justify-content: center; }\n  :host .selected {\n    border-right: none; }\n  :host app-clients-detail {\n    background-color: aqua; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9saXN0LW9mLWNsaWVudHMvRDpcXHNpdGVcXHd3d1xcQXBwQ2xpZW50cy9zcmNcXGFwcFxcY2xpZW50c1xcbGlzdC1vZi1jbGllbnRzXFxsaXN0LW9mLWNsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHFCQUFvQixFQTRCckI7RUEvQkQ7SUFLSSxjQUFhO0lBQ2IsY0FBYTtJQUNiLDBCQUF5QjtJQUN6QixjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLGFBQVk7SUFDWixZQUFXLEVBYVo7RUF4Qkg7TUFhTSxZQUFXO01BQ1gsYUFBWTtNQUNaLG1CQUFrQjtNQUNsQiwwQkFBeUI7TUFDekIsbUJBQWtCLEVBQ25CO0VBbEJMO01Bb0JNLGNBQWE7TUFDYix1QkFBc0I7TUFDdEIsd0JBQXVCLEVBQ3hCO0VBdkJMO0lBMEJJLG1CQUFrQixFQUNuQjtFQTNCSDtJQTZCSSx1QkFBc0IsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2xpc3Qtb2YtY2xpZW50cy9saXN0LW9mLWNsaWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gIC5sZWZ0Q29sSW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc5Nzg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDY0cHg7XHJcbiAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzVjNWM1O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAubmFtZV90aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxuICBhcHAtY2xpZW50cy1kZXRhaWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/clients/list-of-clients/list-of-clients.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/clients/list-of-clients/list-of-clients.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListOfClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfClientsComponent", function() { return ListOfClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListOfClientsComponent = /** @class */ (function () {
    function ListOfClientsComponent(httpService, route, router) {
        this.httpService = httpService;
        this.route = route;
        this.router = router;
        this.allInfo = [];
        this.searchSrt = '';
    }
    ListOfClientsComponent.prototype.ngOnInit = function () {
        this.getClient();
    };
    ListOfClientsComponent.prototype.getClient = function () {
        var _this = this;
        this.httpService.getData().subscribe(function (users) {
            _this.allInfo = users.map(function (u) {
                return {
                    firstName: u.general.firstName,
                    lastName: u.general.lastName,
                    avatar: u.general.avatar,
                    company: u.job.company,
                    title: u.job.title,
                    email: u.contact.email,
                    phone: u.contact.phone,
                    street: u.address.street,
                    city: u.address.city,
                    zipCode: u.address.zipCode,
                    country: u.address.country
                };
            });
        });
    };
    ListOfClientsComponent.prototype.next = function (userInfo) {
        this.router.navigate(['/users', userInfo.firstName]);
    };
    ListOfClientsComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    ListOfClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-of-clients',
            template: __webpack_require__(/*! ./list-of-clients.component.html */ "./src/app/clients/list-of-clients/list-of-clients.component.html"),
            styles: [__webpack_require__(/*! ./list-of-clients.component.scss */ "./src/app/clients/list-of-clients/list-of-clients.component.scss")],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListOfClientsComponent);
    return ListOfClientsComponent;
}());



/***/ }),

/***/ "./src/app/clients/search.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/clients/search.pipe.ts ***!
  \****************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (searchUser, value) {
        return searchUser.filter(function (user) {
            return user.firstName.toLowerCase().includes(value);
        });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.apiHost = './clients.json';
    }
    HttpService.prototype.getData = function () {
        return this.http.get(this.apiHost);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\site\www\AppClients\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map