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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");








var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__["ResumeComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*#region Navigation */\n.navbar {\n    z-index: 3;\n    background-color: #bb8de4;\n\n}\n.nav-divider:after {\n    content: \"|\";\n    position: absolute;\n    top: 16px;\n    color: #ffffff;\n}\na {\n    color: #ffffff !important;\n    font-weight: 600;\n    transition: all 0.2s ease-in-out;\n    -webkit-transition: all 0.2s ease-in-out;\n}\n.navPic {\n    height: 20px;\n    width: 22px;\n}\na:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n}\na:active {\n    cursor: -webkit-grabbing;\n    cursor: grabbing;\n}\n.side-nav {\n    z-index: 4;\n    position: fixed;\n    left: 0;\n    top: 50vh;\n}\n.custom_nav {\n    position: fixed;\n    z-index: 6;\n    top: 6.5vh;\n    right: -105px;\n    width: 25vw;\n    background-color: #bb8de4;\n    text-align: center;\n    opacity: 0;\n}\n.show {\n    transition: all 1s ease-in-out;\n    -webkit-animation-name: show;\n            animation-name: show;\n    -webkit-animation-duration: .5s;\n            animation-duration: .5s;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n.hide {\n    transition: all 1s ease-in-out;\n    -webkit-animation-name: hide;\n            animation-name: hide;\n    -webkit-animation-duration: .5s;\n            animation-duration: .5s;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n/*#endregion */\n/*#region Custom Nav */\n/*#endregion */\n/*#region Media Queries & Keyframes  */\n@media screen and (min-width: 650px ) and (max-width: 767px) {\n    .custom_nav { width: 13vw;}\n}\n@media screen and ( max-width: 767px ){\n    .navbar-toggler {\n        border: none;\n        outline: none;\n    }\n}\n@-webkit-keyframes show {\n    from { -webkit-transform: translateX(0px); transform: translateX(0px) }\n    to { -webkit-transform: translateX(-105px); transform: translateX(-105px) }\n    0%{\n        opacity:0;\n    }\n    70% {\n        opacity:1;\n    }\n    100% {\n        opacity:1;\n    }\n}\n@keyframes show {\n    from { -webkit-transform: translateX(0px); transform: translateX(0px) }\n    to { -webkit-transform: translateX(-105px); transform: translateX(-105px) }\n    0%{\n        opacity:0;\n    }\n    70% {\n        opacity:1;\n    }\n    100% {\n        opacity:1;\n    }\n}\n@-webkit-keyframes hide {\n    from { -webkit-transform: translateX(0px); transform: translateX(0px) }\n    to { -webkit-transform: translateX(105px); transform: translateX(105px) }\n    0%{\n        opacity:1;\n    }\n    95% {\n        opacity:1;\n    }\n    100% {\n        opacity:0;\n    }\n}\n@keyframes hide {\n    from { -webkit-transform: translateX(0px); transform: translateX(0px) }\n    to { -webkit-transform: translateX(105px); transform: translateX(105px) }\n    0%{\n        opacity:1;\n    }\n    95% {\n        opacity:1;\n    }\n    100% {\n        opacity:0;\n    }\n}\n/*#endregion*/\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHNCQUFzQjtBQUN0QjtJQUNJLFVBQVU7SUFDVix5QkFBeUI7O0FBRTdCO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxjQUFjO0FBQ2xCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0FBQ2I7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qiw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsaUNBQXlCO1lBQXpCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCO0FBR0EsY0FBYztBQUVkLHNCQUFzQjtBQUV0QixjQUFjO0FBRWQsc0NBQXNDO0FBRXRDO0lBQ0ksY0FBYyxXQUFXLENBQUM7QUFDOUI7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSjtBQUVBO0lBQ0ksT0FBTyxrQ0FBeUIsRUFBekIsMkJBQTJCO0lBQ2xDLEtBQUsscUNBQTRCLEVBQTVCLDhCQUE4QjtJQUNuQztRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7QUFDSjtBQVpBO0lBQ0ksT0FBTyxrQ0FBeUIsRUFBekIsMkJBQTJCO0lBQ2xDLEtBQUsscUNBQTRCLEVBQTVCLDhCQUE4QjtJQUNuQztRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7QUFDSjtBQUVBO0lBQ0ksT0FBTyxrQ0FBeUIsRUFBekIsMkJBQTJCO0lBQ2xDLEtBQUssb0NBQTJCLEVBQTNCLDZCQUE2QjtJQUNsQztRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7QUFDSjtBQVpBO0lBQ0ksT0FBTyxrQ0FBeUIsRUFBekIsMkJBQTJCO0lBQ2xDLEtBQUssb0NBQTJCLEVBQTNCLDZCQUE2QjtJQUNsQztRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7QUFDSjtBQUNBLGFBQWEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyojcmVnaW9uIE5hdmlnYXRpb24gKi9cbi5uYXZiYXIge1xuICAgIHotaW5kZXg6IDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiOGRlNDtcblxufVxuXG4ubmF2LWRpdmlkZXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwifFwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmEge1xuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ubmF2UGljIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIycHg7XG59XG5cbmE6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbmE6YWN0aXZlIHtcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG4uc2lkZS1uYXYge1xuICAgIHotaW5kZXg6IDQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA1MHZoO1xufVxuXG4uY3VzdG9tX25hdiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDY7XG4gICAgdG9wOiA2LjV2aDtcbiAgICByaWdodDogLTEwNXB4O1xuICAgIHdpZHRoOiAyNXZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYjhkZTQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5zaG93IHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNob3c7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmhpZGUge1xuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24tbmFtZTogaGlkZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC41cztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5cbi8qI2VuZHJlZ2lvbiAqL1xuXG4vKiNyZWdpb24gQ3VzdG9tIE5hdiAqL1xuXG4vKiNlbmRyZWdpb24gKi9cblxuLyojcmVnaW9uIE1lZGlhIFF1ZXJpZXMgJiBLZXlmcmFtZXMgICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4ICkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmN1c3RvbV9uYXYgeyB3aWR0aDogMTN2dzt9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA3NjdweCApe1xuICAgIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2hvdyB7XG4gICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIH1cbiAgICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTA1cHgpIH1cbiAgICAwJXtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICA3MCUge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhpZGUge1xuICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB9XG4gICAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTA1cHgpIH1cbiAgICAwJXtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbiAgICA5NSUge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxufVxuLyojZW5kcmVnaW9uKi9cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md fixed-top navbar-light\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\">James Foley</a>\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"showNav()\" data-toggle=\"collapse\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  \n  <div class=\"collapse navbar-collapse\" id=\"\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-white\" [routerLink]=\"['/home']\">Home<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li *ngIf=\"not_home && !mobileView\" class=\"nav-item\">\n        <a class=\"nav-link text-white\" (click)=\"scrollTo('about')\">About</a>\n      </li>\n      <li *ngIf=\"not_home && !mobileView\" class=\"nav-item\">\n        <a class=\"nav-link text-white\" (click)=\"scrollTo('projects')\">Projects</a>\n      </li>\n      <li *ngIf=\"not_home && !mobileView\" class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"scrollTo('contact')\">\n          <!-- <img class=\"navPic\" src=\"../assets/images/email.svg\" alt=\"Email Logo\"> -->Contact\n        </a>\n      </li>\n      <span class=\"nav-divider\"></span>\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-white\" [routerLink]=\"['/resume']\">Resume</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://www.linkedin.com/in/james-r-foley/\">\n          <img src=\"../assets/images/linkedin.png\" alt=\"LinkedIn Logo\">\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://github.com/JamesFoley1\">\n          <img class=\"navPic\" src=\"../assets/images/GitHub-Mark-Light-logo.png\" alt=\"Github Logo\">\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div *ngIf=\"mobileView\" class=\"custom_nav\" id=\"custom_nav\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-white\" [routerLink]=\"['/home']\">Home<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-white\" [routerLink]=\"['/resume']\">Resume</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://www.linkedin.com/in/james-r-foley/\">\n          <img src=\"../assets/images/linkedin.png\" alt=\"LinkedIn Logo\">\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://github.com/JamesFoley1\">\n          <img class=\"navPic\" src=\"../assets/images/GitHub-Mark-Light-logo.png\" alt=\"Github Logo\">\n        </a>\n      </li>\n    </ul>\n</div>\n\n<!-- <div *ngIf=\"not_home && !mobileView\" class=\"side-nav\">\n  <a class=\"nav-link\" (click)=\"scrollTo('top')\">\n    <img src=\"../assets/images/up.png\" alt=\"Return to top navigation arrow\">\n  </a>\n  <a class=\"nav-link\" (click)=\"scrollTo('footer')\">\n    <img src=\"../assets/images/down.png\" alt=\"Go to bottom navigation arrow\">\n  </a>\n</div> -->\n\n<!-- Resize event listener for angular -->\n<div (window:resize)=\"onResize($event)\"></div>\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);





var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    // Monitor screen size changes
    AppComponent.prototype.onResize = function (event) {
        event.target.innerWidth;
        if (window.innerWidth < 768) {
            this.mobileView = true;
        }
        else {
            this.mobileView = false;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        aos__WEBPACK_IMPORTED_MODULE_4__["init"]();
        var html = document.querySelector('body');
        var max_width = window.innerWidth;
        html.style.width = "" + max_width;
        if (window.innerWidth < 900) {
            this.mobileView = true;
        }
        else {
            this.mobileView = false;
        }
        this._router.events.subscribe(function (event) {
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                if (_this._router.url == '/home') {
                    _this.not_home = true;
                }
                return;
            }
            else {
                _this.not_home = false;
                return;
            }
        });
    };
    AppComponent.prototype.scrollTo = function (location) {
        var element = document.getElementById(location);
        element.scrollIntoView({ behavior: 'smooth' });
    };
    AppComponent.prototype.showNav = function () {
        var nav = document.getElementById('custom_nav');
        if (!this.show) {
            nav.classList.remove('hide');
            nav.classList.add('show');
            this.show = !this.show;
        }
        else {
            nav.classList.remove('show');
            nav.classList.add('hide');
            this.show = !this.show;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _backdrop_backdrop_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./backdrop/backdrop.component */ "./src/app/backdrop/backdrop.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_14__["ResumeComponent"],
                _backdrop_backdrop_component__WEBPACK_IMPORTED_MODULE_15__["BackdropComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__["OwlModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/backdrop/backdrop.component.css":
/*!*************************************************!*\
  !*** ./src/app/backdrop/backdrop.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*#region Video */\n\n.blur {\n    filter: blur(3px);\n    -o-filter:blur(3px);\n    -ms-filter:blur(3px);\n    -moz-filter:blur(3px);\n    -webkit-filter:blur(3px);\n    pointer-events: none;\n}\n\n.video-container {\n    height: 100vh;\n    position: relative;\n    overflow: hidden;\n}\n\nvideo {\n    -o-object-fit: cover;\n       object-fit: cover;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    -o-object-position: 10% 10%;\n       object-position: 10% 10%;\n}\n\n@media screen and (max-width: 600px) {\n    video {\n        -o-object-position: 10% 10%;\n           object-position: 10% 10%;\n    }\n}\n\n/*#endregion */\n\n/*#region Fade-In Text */\n\n.name {\n    color: #ff5252;\n}\n\n.centered:hover {\n    cursor: default;\n}\n\n.centered1 {\n    font-size: 2rem;\n    color: rgb(213, 213, 213);\n    text-decoration: none;\n    position: absolute;\n    top: -10px;\n    left: 50%;\n    transition: -webkit-transform 1s;\n    transition: transform 1s;\n    transition: transform 1s, -webkit-transform 1s;\n    -webkit-animation-name: center1;\n            animation-name: center1;\n    -webkit-animation-duration: 1.5s;\n            animation-duration: 1.5s;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-delay: 0.5s ease-in;\n            animation-delay: 0.5s ease-in;\n}\n\n.centered2 {\n    font-size: 2rem;\n    color: rgb(213, 213, 213);\n    text-decoration: none;\n    position: absolute;\n    top: -10px;\n    left: 50%;\n    transition: -webkit-transform 1s;\n    transition: transform 1s;\n    transition: transform 1s, -webkit-transform 1s;\n    -webkit-animation-name: center2;\n            animation-name: center2;\n    -webkit-animation-duration: 2.5s;\n            animation-duration: 2.5s;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-delay: 1s ease-in;\n            animation-delay: 1s ease-in;\n}\n\n.centered3 {\n    font-size: 2rem;\n    color: rgb(213, 213, 213);\n    text-decoration: none;\n    position: absolute;\n    top: -10px;\n    left: 50%;\n    transition: -webkit-transform 1s;\n    transition: transform 1s;\n    transition: transform 1s, -webkit-transform 1s;\n    -webkit-animation-name: center3;\n            animation-name: center3;\n    -webkit-animation-duration: 3s;\n            animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-delay: 1.5s ease-in;\n            animation-delay: 1.5s ease-in;\n}\n\n/*#endregion */\n\n/*#region Keyframes */\n\n@-webkit-keyframes center1 {\n    from{ -webkit-transform: translateX(-50%); transform: translateX(-50%) }\n    to{ -webkit-transform: translateY(40vh) translateX(-50%); transform: translateY(40vh) translateX(-50%) }\n    0%{\n        opacity: 0;\n    }\n    50%{\n        opacity: 0;\n    }\n    100%{\n        opacity: 1;\n    }\n}\n\n@keyframes center1 {\n    from{ -webkit-transform: translateX(-50%); transform: translateX(-50%) }\n    to{ -webkit-transform: translateY(40vh) translateX(-50%); transform: translateY(40vh) translateX(-50%) }\n    0%{\n        opacity: 0;\n    }\n    50%{\n        opacity: 0;\n    }\n    100%{\n        opacity: 1;\n    }\n}\n\n@-webkit-keyframes center2 {\n    from{ -webkit-transform: translateX(-50%); transform: translateX(-50%) }\n    to{ -webkit-transform: translateY(50vh) translateX(-50%); transform: translateY(50vh) translateX(-50%) }\n    0%{\n        opacity: 0;\n    }\n    50%{\n        opacity: 0;\n    }\n    100%{\n        opacity: 1;\n    }\n}\n\n@keyframes center2 {\n    from{ -webkit-transform: translateX(-50%); transform: translateX(-50%) }\n    to{ -webkit-transform: translateY(50vh) translateX(-50%); transform: translateY(50vh) translateX(-50%) }\n    0%{\n        opacity: 0;\n    }\n    50%{\n        opacity: 0;\n    }\n    100%{\n        opacity: 1;\n    }\n}\n\n@-webkit-keyframes center3 {\n    from{ -webkit-transform: translateX(-50%); transform: translateX(-50%) }\n    to{ -webkit-transform: translateY(60vh) translateX(-50%); transform: translateY(60vh) translateX(-50%) }\n    0%{\n        opacity: 0;\n    }\n    60%{\n        opacity: 0;\n    }\n    100%{\n        opacity: 1;\n    }\n}\n\n@keyframes center3 {\n    from{ -webkit-transform: translateX(-50%); transform: translateX(-50%) }\n    to{ -webkit-transform: translateY(60vh) translateX(-50%); transform: translateY(60vh) translateX(-50%) }\n    0%{\n        opacity: 0;\n    }\n    60%{\n        opacity: 0;\n    }\n    100%{\n        opacity: 1;\n    }\n}\n\n@-webkit-keyframes center4 {\n    from{ -webkit-transform: translateX(-50%); transform: translateX(-50%) }\n    to{ -webkit-transform: translateY(70vh) translateX(-50%); transform: translateY(70vh) translateX(-50%) }\n    0%{\n        opacity: 0;\n    }\n    70%{\n        opacity: 0;\n    }\n    100%{\n        opacity: 1;\n    }\n}\n\n@keyframes center4 {\n    from{ -webkit-transform: translateX(-50%); transform: translateX(-50%) }\n    to{ -webkit-transform: translateY(70vh) translateX(-50%); transform: translateY(70vh) translateX(-50%) }\n    0%{\n        opacity: 0;\n    }\n    70%{\n        opacity: 0;\n    }\n    100%{\n        opacity: 1;\n    }\n}\n\n/*#endregion */\n\n/*#region Media Queries */\n\n@media screen and (max-width: 900px){\n    .centered1 {\n        font-size: 1.5rem;\n    }\n    .centered2 {\n        font-size: 1.5rem;\n    }\n    .centered3 {\n        font-size: 1.5rem;\n    }\n}\n\n@media screen and (max-width: 760px){\n    .centered1 {\n        font-size: 1.2rem;\n    }\n    .centered2 {\n        font-size: 1.2rem;\n    }\n    .centered3 {\n        font-size: 1.2rem;\n    }\n}\n\n/*#endregion */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja2Ryb3AvYmFja2Ryb3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsaUJBQWlCOztBQUVqQjtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLE1BQU07SUFDTixPQUFPO0lBQ1AsMkJBQXdCO09BQXhCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJO1FBQ0ksMkJBQXdCO1dBQXhCLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBLGNBQWM7O0FBRWQsd0JBQXdCOztBQUV4QjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0NBQXdCO0lBQXhCLHdCQUF3QjtJQUF4Qiw4Q0FBd0I7SUFDeEIsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULGdDQUF3QjtJQUF4Qix3QkFBd0I7SUFBeEIsOENBQXdCO0lBQ3hCLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQ0FBd0I7SUFBeEIsd0JBQXdCO0lBQXhCLDhDQUF3QjtJQUN4QiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDOztBQUVBLGNBQWM7O0FBRWQscUJBQXFCOztBQUVyQjtJQUNJLE1BQU0sbUNBQTBCLEVBQTFCLDRCQUE0QjtJQUNsQyxJQUFJLG9EQUEyQyxFQUEzQyw2Q0FBNkM7SUFDakQ7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBWkE7SUFDSSxNQUFNLG1DQUEwQixFQUExQiw0QkFBNEI7SUFDbEMsSUFBSSxvREFBMkMsRUFBM0MsNkNBQTZDO0lBQ2pEO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUNBO0lBQ0ksTUFBTSxtQ0FBMEIsRUFBMUIsNEJBQTRCO0lBQ2xDLElBQUksb0RBQTJDLEVBQTNDLDZDQUE2QztJQUNqRDtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFaQTtJQUNJLE1BQU0sbUNBQTBCLEVBQTFCLDRCQUE0QjtJQUNsQyxJQUFJLG9EQUEyQyxFQUEzQyw2Q0FBNkM7SUFDakQ7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBQ0E7SUFDSSxNQUFNLG1DQUEwQixFQUExQiw0QkFBNEI7SUFDbEMsSUFBSSxvREFBMkMsRUFBM0MsNkNBQTZDO0lBQ2pEO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQVpBO0lBQ0ksTUFBTSxtQ0FBMEIsRUFBMUIsNEJBQTRCO0lBQ2xDLElBQUksb0RBQTJDLEVBQTNDLDZDQUE2QztJQUNqRDtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFDQTtJQUNJLE1BQU0sbUNBQTBCLEVBQTFCLDRCQUE0QjtJQUNsQyxJQUFJLG9EQUEyQyxFQUEzQyw2Q0FBNkM7SUFDakQ7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBWkE7SUFDSSxNQUFNLG1DQUEwQixFQUExQiw0QkFBNEI7SUFDbEMsSUFBSSxvREFBMkMsRUFBM0MsNkNBQTZDO0lBQ2pEO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUNBLGNBQWM7O0FBRWQseUJBQXlCOztBQUV6QjtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUEsY0FBYyIsImZpbGUiOiJzcmMvYXBwL2JhY2tkcm9wL2JhY2tkcm9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qI3JlZ2lvbiBWaWRlbyAqL1xuXG4uYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDNweCk7XG4gICAgLW8tZmlsdGVyOmJsdXIoM3B4KTtcbiAgICAtbXMtZmlsdGVyOmJsdXIoM3B4KTtcbiAgICAtbW96LWZpbHRlcjpibHVyKDNweCk7XG4gICAgLXdlYmtpdC1maWx0ZXI6Ymx1cigzcHgpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udmlkZW8tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuICBcbnZpZGVvIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG9iamVjdC1wb3NpdGlvbjogMTAlIDEwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB2aWRlbyB7XG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogMTAlIDEwJTtcbiAgICB9XG59XG5cbi8qI2VuZHJlZ2lvbiAqL1xuXG4vKiNyZWdpb24gRmFkZS1JbiBUZXh0ICovXG5cbi5uYW1lIHtcbiAgICBjb2xvcjogI2ZmNTI1Mjtcbn1cblxuLmNlbnRlcmVkOmhvdmVyIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5jZW50ZXJlZDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogcmdiKDIxMywgMjEzLCAyMTMpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZW50ZXIxO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC41cyBlYXNlLWluO1xufVxuXG4uY2VudGVyZWQyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6IHJnYigyMTMsIDIxMywgMjEzKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICBhbmltYXRpb24tbmFtZTogY2VudGVyMjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDIuNXM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzIGVhc2UtaW47XG59XG5cbi5jZW50ZXJlZDMge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogcmdiKDIxMywgMjEzLCAyMTMpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZW50ZXIzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuNXMgZWFzZS1pbjtcbn1cblxuLyojZW5kcmVnaW9uICovXG5cbi8qI3JlZ2lvbiBLZXlmcmFtZXMgKi9cblxuQGtleWZyYW1lcyBjZW50ZXIxIHtcbiAgICBmcm9teyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgfVxuICAgIHRveyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDB2aCkgdHJhbnNsYXRlWCgtNTAlKSB9XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJXtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIGNlbnRlcjIge1xuICAgIGZyb217IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB9XG4gICAgdG97IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHZoKSB0cmFuc2xhdGVYKC01MCUpIH1cbiAgICAwJXtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAle1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgY2VudGVyMyB7XG4gICAgZnJvbXsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIH1cbiAgICB0b3sgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYwdmgpIHRyYW5zbGF0ZVgoLTUwJSkgfVxuICAgIDAle1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA2MCV7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuQGtleWZyYW1lcyBjZW50ZXI0IHtcbiAgICBmcm9teyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgfVxuICAgIHRveyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzB2aCkgdHJhbnNsYXRlWCgtNTAlKSB9XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDcwJXtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG4vKiNlbmRyZWdpb24gKi9cblxuLyojcmVnaW9uIE1lZGlhIFF1ZXJpZXMgKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xuICAgIC5jZW50ZXJlZDEge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gICAgLmNlbnRlcmVkMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgICAuY2VudGVyZWQzIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCl7XG4gICAgLmNlbnRlcmVkMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgICAuY2VudGVyZWQyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICAgIC5jZW50ZXJlZDMge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG59XG5cbi8qI2VuZHJlZ2lvbiAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/backdrop/backdrop.component.html":
/*!**************************************************!*\
  !*** ./src/app/backdrop/backdrop.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"top\"></div>\n\n<section class=\"video-container\">\n    <video *ngIf=\"true\" class=\"blur\" src=\"../../assets/video/coding_clip.mp4\" autoplay muted loop playsinline onloadedmetadata=\"this.muted = true\"></video>\n    <div class=\"support\">\n        <a href=\"http://caniuse.com/#search=object-fit\">Browser Support</a><br>\n        <a href=\"https://github.com/jonathantneal/fitie\">Need to support IE &amp; Edge?</a>\n    </div>\n</section>\n\n<p class=\"centered centered1\">Hello, I'm <span class=\"name\">James Foley</span></p>\n<p class=\"centered centered2\">I'm a Full-Stack Web Developer</p>\n<p class=\"centered centered3\">Based in <span class=\"name\">Phoenix, AZ</span></p>"

/***/ }),

/***/ "./src/app/backdrop/backdrop.component.ts":
/*!************************************************!*\
  !*** ./src/app/backdrop/backdrop.component.ts ***!
  \************************************************/
/*! exports provided: BackdropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackdropComponent", function() { return BackdropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackdropComponent = /** @class */ (function () {
    function BackdropComponent() {
    }
    BackdropComponent.prototype.ngOnInit = function () { };
    BackdropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-backdrop',
            template: __webpack_require__(/*! ./backdrop.component.html */ "./src/app/backdrop/backdrop.component.html"),
            styles: [__webpack_require__(/*! ./backdrop.component.css */ "./src/app/backdrop/backdrop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackdropComponent);
    return BackdropComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*#region Contact Form */\n.contact_header {\n    display: block;\n    margin-bottom: 5%;\n    color: black;\n}\n.contact_textarea {\n    height: 20vh;\n}\n.card {\n    background-color: #f0f0f0;\n    border-right: 0.3px solid #a9a9a9;\n    box-shadow: 0.5px 0.5px 5px 1px #a9a9a9;\n    text-align: center;\n    margin-top: 7%;\n    padding: 3% 2%;\n}\n.custom-input {\n    width: 50%;\n    margin: auto;\n}\n/*#endregion */\n/*#region Footer  */\n.footer {\n    text-align: center;\n    display: block;\n    margin-top: auto;\n    background-color: #bb8de4;\n    -webkit-clip-path: polygon(15% 50%, 85% 50%, 95% 45%, 100% 35%, 100% 100%, 0 100%, 0 65%, 5% 55%);\n    clip-path: polygon(15% 50%, 85% 50%, 95% 45%, 100% 35%, 100% 100%, 0 100%, 0 65%, 5% 55%);\n}\nli {\n    margin: 0 4% 0 0;\n    transition: all 0.2s ease-in-out;\n    -webkit-transition: all 0.2s ease-in-out;\n}\nli:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n}\na:active {\n    cursor: -webkit-grabbing;\n    cursor: grabbing;\n}\n/*#endregion */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdCQUF3QjtBQUN4QjtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBLGNBQWM7QUFFZCxtQkFBbUI7QUFDbkI7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaUdBQWlHO0lBQ2pHLHlGQUF5RjtBQUM3RjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0FBQ3BCO0FBRUEsY0FBYyIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiNyZWdpb24gQ29udGFjdCBGb3JtICovXG4uY29udGFjdF9oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbnRhY3RfdGV4dGFyZWEge1xuICAgIGhlaWdodDogMjB2aDtcbn1cblxuLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwLjNweCBzb2xpZCAjYTlhOWE5O1xuICAgIGJveC1zaGFkb3c6IDAuNXB4IDAuNXB4IDVweCAxcHggI2E5YTlhOTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNyU7XG4gICAgcGFkZGluZzogMyUgMiU7XG59XG5cbi5jdXN0b20taW5wdXQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4vKiNlbmRyZWdpb24gKi9cblxuLyojcmVnaW9uIEZvb3RlciAgKi9cbi5mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYjhkZTQ7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMTUlIDUwJSwgODUlIDUwJSwgOTUlIDQ1JSwgMTAwJSAzNSUsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDY1JSwgNSUgNTUlKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTUlIDUwJSwgODUlIDUwJSwgOTUlIDQ1JSwgMTAwJSAzNSUsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDY1JSwgNSUgNTUlKTtcbn1cblxubGkge1xuICAgIG1hcmdpbjogMCA0JSAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxubGk6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbmE6YWN0aXZlIHtcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG4vKiNlbmRyZWdpb24gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-aos=\"zoom-in-up\" data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"1500\" class=\"contact_form\" id=\"contact\">\n  <div class=\"row\">\n    <div class=\"col-0 col-sm-0 col-md-2 col-lg-2\"></div>\n    <div class=\"col-12 col-sm-12 col-md-8 col-lg-8 card\">\n      <h1 class=\"contact_header\">Get in touch</h1>\n      <p class=\"wrap\">\n        If you would like to work together or simply say hello, fill out the form or send me an email at foley.r.james@gmail.com\n      </p>\n      <form class=\"contact_form\" method=\"POST\" action=\"https://formspree.io/jrfoley13866@yahoo.com\" [formGroup]=\"email\" (ngSubmit)=\"Email(email.value)\">\n        <input class=\"form-control input custom-input\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\"><br>\n        <input class=\"form-control input custom-input\" type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Your Email Address\"><br>\n        <textarea class=\"form-control contact_textarea input\" name=\"message\" formControlName=\"message\" placeholder=\"Message\"></textarea><br>\n        <button class=\"btn mybtn mb-2\" type=\"submit\" name=\"Submit\" [disabled]=\"!email.valid\">Submit</button>\n      </form>\n    </div>\n    <div class=\"col-0 col-sm-0 col-md-2 col-lg-2\"></div>\n  </div>\n</div>\n<div class=\"footer\" id=\"footer\">\n  <h1 class=\"contact_header\">Get in touch</h1>\n  <br>\n    <div class=\"row\">\n      <div class=\"col-1 col-sm-1 col-md-3 col-lg-3\"></div>\n      <div class=\"col-10 col-sm-10 col-md-6 col-lg-6\">\n        <ul>\n          <li>\n            <a class=\"nav-link\" href=\"https://www.linkedin.com/in/james-r-foley/\">\n              <img src=\"../../assets/images/linkedin.png\" alt=\"LinkedIn Logo\">\n            </a>\n          </li>\n          <li>\n            <a class=\"nav-link\" href=\"https://github.com/JamesFoley1\">\n              <img src=\"../../assets/images/GitHub-Mark-Light-logo.png\" alt=\"Github Logo\">\n            </a>\n          </li>\n          <li>\n            <a class=\"nav-link text-white\" (click)=\"scrollTo('top')\">Back To Top</a>\n          </li>\n        </ul>\n        <div class=\"col-1 col-sm-1 col-md-3 col-lg-3\"></div>\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ContactComponent = /** @class */ (function () {
    function ContactComponent(_httpService, fb) {
        this._httpService = _httpService;
        this.fb = fb;
        this.email = fb.group({
            name: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            email: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            message: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
        });
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.Email = function (post) {
        var name = post.name;
        var email = post.email;
        var message = post.message;
        this._httpService.submitForm(name, email, message);
    };
    ContactComponent.prototype.scrollTo = function (className) {
        var element = document.getElementById(className);
        element.scrollIntoView({ behavior: 'smooth' });
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*#region Headers and Elements */\nli {\n    margin-right: 4%\n}\n.title {\n    margin-bottom: 5%;\n}\n.bio {\n    text-align: center;\n    font-size: 16px;\n    font-weight: 600;\n    margin: 10% 0 0 12%;\n    text-align: left;\n    overflow-y: scroll;\n    height: 250px;\n}\n.row {\n    margin: 3% 0;\n    text-align: center;\n}\n/*#endregion */\n/*#region Headshot Img */\n.headshot_container {\n    display: inline-block;\n    margin-top: 1%;\n    margin-left: 5%;\n    width: 220px;\n    height: 260px;\n    transition: 0.5s ease;\n    background-image: url('Me.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    /* -webkit-clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%); */\n    /* clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%); */\n}\n.headshot {\n    max-width: 100%;\n    max-height: 100%;\n}\n.my_photo {\n    height: 240px;\n}\n/*#endregion */\n/*#region Card and Owl/Carousels Section */\n.card {\n    height: 30%;\n    width: 100%;\n    background-color: #f0f0f0;\n    border-right: 0.3px solid #a9a9a9;\n    box-shadow: 0.5px 0.5px 5px 1px #a9a9a9;\n    transition: all 0.2s ease-in-out;\n    -webkit-transition: all 0.2s ease-in-out;\n}\n.card:hover {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    cursor: -webkit-grab;\n    cursor: grab;\n}\n.card:active {\n    cursor: -webkit-grabbing;\n    cursor: grabbing;\n}\n.card p {\n    font-size: 13px;\n}\n.owl-carousel {\n    height: 37%;\n}\n.owl-drag{\n    margin: auto !important;\n}\nngb-carousel {\n    outline: none !important;\n    margin-bottom: 3%;\n}\n.owl-carousel .nav-btn{\n    height: 47px;\n    position: absolute;\n    width: 26px;\n    cursor: pointer;\n    top: 100px !important;\n  }\n.owl-carousel .owl-prev.disabled,\n  .owl-carousel .owl-next.disabled{\n  pointer-events: none;\n  opacity: 0.2;\n  }\n.owl-carousel .prev-slide{\n    background: url('chevron-left.png') no-repeat scroll 0 0;\n    left: -33px;\n  }\n.owl-carousel .next-slide{\n    background: url('chevron-right.png') no-repeat scroll -24px 0px;\n    right: -33px;\n  }\n.owl-carousel .prev-slide:hover{\n   background-position: 0px -53px;\n  }\n.owl-carousel .next-slide:hover{\n  background-position: -24px -53px;\n  }\n/*#endregion */\n/*#region Media Queries */\n@media screen and (max-width: 1030px){\n    .heading {\n        font-size: 1.7rem;\n    }\n    \n}\n@media screen and (max-width: 700px){\n    .heading {\n        font-size: 1.7rem;\n    }\n}\n@media screen and (max-width: 600px){\n    .icon {\n        margin: auto !important;\n    }\n    \n    .row {\n        margin-bottom: 10%;\n    }\n\n    .title { font-size: 1.5rem; margin-bottom: 8% }\n\n    .project_wrapper { \n        padding: 17% 0 5% 0;\n        color: white;\n        -webkit-clip-path: polygon(50% 12%, 100% 0, 100% 99%, 0 99%, 0 0);\n        clip-path: polygon(50% 12%, 100% 0, 100% 99%, 0 99%, 0 0);\n    }\n\n    .bio {\n        font-size: 14px;\n        margin: 20px 0;\n        overflow-y: none;\n        height: 100%;\n    }\n}\n/*#endregion*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdDQUFnQztBQUNoQztJQUNJO0FBQ0o7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBLGNBQWM7QUFFZCx3QkFBd0I7QUFDeEI7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiwrQkFBbUQ7SUFDbkQsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IscUZBQXFGO0lBQ3JGLDZFQUE2RTtBQUNqRjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBLGNBQWM7QUFFZCwwQ0FBMEM7QUFFMUM7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsdUNBQXVDO0lBQ3ZDLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7QUFFQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsb0JBQVk7SUFBWixZQUFZO0FBQ2hCO0FBRUE7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtFQUN2QjtBQUVBOztFQUVBLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1o7QUFFQTtJQUNFLHdEQUEyRTtJQUMzRSxXQUFXO0VBQ2I7QUFDQTtJQUNFLCtEQUFrRjtJQUNsRixZQUFZO0VBQ2Q7QUFDQTtHQUNDLDhCQUE4QjtFQUMvQjtBQUNBO0VBQ0EsZ0NBQWdDO0VBQ2hDO0FBRUYsY0FBYztBQUVkLHlCQUF5QjtBQUV6QjtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCOztBQUVKO0FBQ0E7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQSxTQUFTLGlCQUFpQixFQUFFLGtCQUFrQjs7SUFFOUM7UUFDSSxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGlFQUFpRTtRQUNqRSx5REFBeUQ7SUFDN0Q7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCO0FBQ0o7QUFDQSxhQUFhIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qI3JlZ2lvbiBIZWFkZXJzIGFuZCBFbGVtZW50cyAqL1xubGkge1xuICAgIG1hcmdpbi1yaWdodDogNCVcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmJpbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMTAlIDAgMCAxMiU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLnJvdyB7XG4gICAgbWFyZ2luOiAzJSAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi8qI2VuZHJlZ2lvbiAqL1xuXG4vKiNyZWdpb24gSGVhZHNob3QgSW1nICovXG4uaGVhZHNob3RfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBoZWlnaHQ6IDI2MHB4O1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvTWUuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAvKiAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig3NSUgMCUsIDEwMCUgNTAlLCA3NSUgMTAwJSwgMCUgMTAwJSwgMjUlIDUwJSwgMCUgMCUpOyAqL1xuICAgIC8qIGNsaXAtcGF0aDogcG9seWdvbig3NSUgMCUsIDEwMCUgNTAlLCA3NSUgMTAwJSwgMCUgMTAwJSwgMjUlIDUwJSwgMCUgMCUpOyAqL1xufVxuICBcbi5oZWFkc2hvdCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5teV9waG90byB7XG4gICAgaGVpZ2h0OiAyNDBweDtcbn1cblxuLyojZW5kcmVnaW9uICovXG5cbi8qI3JlZ2lvbiBDYXJkIGFuZCBPd2wvQ2Fyb3VzZWxzIFNlY3Rpb24gKi9cblxuLmNhcmQge1xuICAgIGhlaWdodDogMzAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwLjNweCBzb2xpZCAjYTlhOWE5O1xuICAgIGJveC1zaGFkb3c6IDAuNXB4IDAuNXB4IDVweCAxcHggI2E5YTlhOTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2FyZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBjdXJzb3I6IGdyYWI7XG59XG5cbi5jYXJkOmFjdGl2ZSB7XG4gICAgY3Vyc29yOiBncmFiYmluZztcbn1cblxuLmNhcmQgcCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ub3dsLWNhcm91c2VsIHtcbiAgICBoZWlnaHQ6IDM3JTtcbn1cblxuLm93bC1kcmFne1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xufVxuXG5uZ2ItY2Fyb3VzZWwge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuLm93bC1jYXJvdXNlbCAubmF2LWJ0bntcbiAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1wcmV2LmRpc2FibGVkLFxuICAub3dsLWNhcm91c2VsIC5vd2wtbmV4dC5kaXNhYmxlZHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuMjtcbiAgfVxuICBcbiAgLm93bC1jYXJvdXNlbCAucHJldi1zbGlkZXtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29ucy9jaGV2cm9uLWxlZnQucG5nJykgbm8tcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgbGVmdDogLTMzcHg7XG4gIH1cbiAgLm93bC1jYXJvdXNlbCAubmV4dC1zbGlkZXtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29ucy9jaGV2cm9uLXJpZ2h0LnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgLTI0cHggMHB4O1xuICAgIHJpZ2h0OiAtMzNweDtcbiAgfVxuICAub3dsLWNhcm91c2VsIC5wcmV2LXNsaWRlOmhvdmVye1xuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC01M3B4O1xuICB9XG4gIC5vd2wtY2Fyb3VzZWwgLm5leHQtc2xpZGU6aG92ZXJ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNHB4IC01M3B4O1xuICB9ICBcblxuLyojZW5kcmVnaW9uICovXG5cbi8qI3JlZ2lvbiBNZWRpYSBRdWVyaWVzICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMzBweCl7XG4gICAgLmhlYWRpbmcge1xuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICB9XG4gICAgXG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XG4gICAgLmhlYWRpbmcge1xuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgICAuaWNvbiB7XG4gICAgICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAucm93IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgIH1cblxuICAgIC50aXRsZSB7IGZvbnQtc2l6ZTogMS41cmVtOyBtYXJnaW4tYm90dG9tOiA4JSB9XG5cbiAgICAucHJvamVjdF93cmFwcGVyIHsgXG4gICAgICAgIHBhZGRpbmc6IDE3JSAwIDUlIDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDEyJSwgMTAwJSAwLCAxMDAlIDk5JSwgMCA5OSUsIDAgMCk7XG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMTIlLCAxMDAlIDAsIDEwMCUgOTklLCAwIDk5JSwgMCAwKTtcbiAgICB9XG5cbiAgICAuYmlvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgb3ZlcmZsb3cteTogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cbi8qI2VuZHJlZ2lvbiovXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-backdrop></app-backdrop>\n<div class=\"about\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"row\">\n        <div data-aos=\"fade-right\" data-aos-easing=\"linear\" data-aos-duration=\"600\" class=\"col-12 col-sm-12 col-md-4 col-lg-4\">\n          <div class=\"headshot_container\"></div>\n          <p class=\"bio\">\n            I currently work at AppZen as an Artificial Intelligence Services Engineer where I utilize multiple technologies in order to support other engineering teams. I process the output of our AI models and apply these results to custom scenarios for different customers. I build, deploy, and support integrations between AppZen and other ERP platforms utilizing AWS serverless architectures coupled with Java, Python, and NodeJS as well as Jitterbit. I maintain monitoring tools for alerting and failures as well. I create RPA solutions using Puppeteer in order to make various workflow enhancements and occasionally build simple React servers to handle other odd jobs.\n          </p>\n        </div>\n        <div class=\"col-0 col-sm-0 col-md-1 col-lg-1\"></div>\n        <div class=\"col-12 col-sm-12 col-md-7 col-lg-7\">\n          <div data-aos=\"flip-up\" loop=\"true\" data-aos-easing=\"linear\" data-aos-duration=\"600\" class=\"owl-carousel owl-theme card\" #carousel1>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <h2 class=\"heading\">Front-End</h2>\n                <hr>\n                <ul>\n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"200\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/html-5-logo.svg\" alt=\"Html Logo\"><p>HTML</p></li>\n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"250\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/Css3-logo.png\" alt=\"Css Logo\"><p>CSS</p></li>\n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"300\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/javascript-logo.svg\" alt=\"JavaScript Logo\"><p>JavaScript</p></li>\n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"100\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/react-native-logo.png\" alt=\"React Native Logo\"><p>React</p></li>\n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"150\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/redux-logo.png\" alt=\"Redux Logo\"><p>Redux</p></li>\n                  <!-- <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"350\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/angularjs-logo.svg\" alt=\"Angular Logo\"><p>Angular</p></li> -->\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <h2 class=\"heading\">Back-End</h2>\n                <hr>\n                <ul>\n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"100\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/python-logo.svg\" alt=\"Python Logo\"><p>Python</p></li>\n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"150\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/Django-logo.png\" alt=\"Django Logo\"><p>Django</p></li>\n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"200\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/nodejs-logo.svg\" alt=\"NodeJS Logo\"><p>Node.js</p></li>\n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"250\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/express-logo.png\" alt=\"Express Logo\"><p>Express</p></li> \n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"300\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/c-sharp-logo.png\" alt=\"C-Sharp Logo\"><p>C#</p></li>\n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"350\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/netcore-logo.png\" alt=\"ASP.NET Core Logo\"><p>.Net Core</p></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <!-- END OF OWL 1 -->\n          <div class=\"row\" id=\"about\"></div>\n          <br>\n          <!-- START OF OWL 2 -->\n          <div data-aos=\"flip-up\" data-aos-easing=\"linear\" data-aos-duration=\"600\" class=\"owl-carousel owl-theme card\" #carousel2>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <h2 class=\"heading\">Databases</h2>\n                <hr>\n                <ul>\n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"150\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/postgresql-logo.png\" alt=\"Postgresql Logo\"><p>PostgreSQL</p></li>\n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"100\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/mysql-logo.png\" alt=\"MySQL Logo\"><p>MySQL</p></li>\n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"200\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/mongodb-logo.png\" alt=\"MongoDB Logo\"><p>MongoDB</p></li>\n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"250\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/firebase-logo.png\" alt=\"Firebase Logo\"><p>Firebase</p></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <h2 class=\"heading\">Mobile</h2>\n                <hr>\n                <ul>\n                  <li data-aos=\"zoom-in-up\" data-aos-easing=\"linear\" data-aos-duration=\"400\" data-aos-delay=\"100\" class=\"center\"><img class=\"icon\" src=\"../../assets/icons/react-native-logo.png\" alt=\"React Native Logo\"><p>React-Native</p></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <!-- END OF OWL 2 -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-projects></app-projects>\n<app-contact></app-contact>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngAfterContentInit = function () {
        $(this.el.nativeElement).owlCarousel({
            items: 1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            responsiveRefreshRate: 10,
            autoplay: true,
            loop: true,
            autoplayTimeout: 4000,
            smartSpeed: 2000,
            autoplayHoverPause: true
        });
        $(this.el2.nativeElement).owlCarousel({
            items: 1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            responsiveRefreshRate: 10,
            autoplay: true,
            loop: true,
            autoplayTimeout: 4000,
            smartSpeed: 2000,
            autoplayHoverPause: true
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "el", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "el2", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.submitForm = function (name, email, message) {
        var destinationEmail = "foley.r.james@gmail.com";
        var form = document.createElement('form');
        form.setAttribute("action", "https://formspree.io/" + destinationEmail);
        form.setAttribute("method", "POST");
        // Subject for your email
        var field = document.createElement("input");
        field.setAttribute("type", "hidden");
        field.setAttribute("name", "_subject");
        field.setAttribute("value", "Contact form submitted");
        form.appendChild(field);
        // Contact email address        
        field = document.createElement("input");
        field.setAttribute("type", "hidden");
        field.setAttribute("name", "email");
        field.setAttribute("value", email);
        form.appendChild(field);
        // Your user's name
        field = document.createElement("input");
        field.setAttribute("type", "hidden");
        field.setAttribute("name", "name");
        field.setAttribute("value", name);
        form.appendChild(field);
        // The text message
        field = document.createElement("input");
        field.setAttribute("type", "hidden");
        field.setAttribute("name", "message");
        field.setAttribute("value", message);
        form.appendChild(field);
        document.body.appendChild(form);
        form.submit();
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n    margin-top: 5%;\n}\n\n.image_container {\n    height: auto;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xuICAgIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uaW1hZ2VfY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-4 col-sm-4 col-md-4 col-lg-4\"></div>\n  <div class=\"col-4 col-sm-4 col-md-4 col-lg-4\">\n    <div>\n      <div class=\"image_container\">\n        <img class=\"img-fluid\" src=\"https://pics.me.me/houston-we-have-a-problem-31508469.png\" alt=\"Page not found, redirect home\">\n      </div>\n      <div class=\"card-content\">\n        <p>Error 404: Page not found!</p>\n        <p>No really, you shouldn't be here...</p>\n      </div>\n      <div class=\"card-action\">\n        <a [routerLink]=\"['/home']\">Please Go Home</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-4 col-sm-4 col-md-4 col-lg-4\"></div>\n</div>\n       "

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project_wrapper {\n    background-color: #202020;\n    text-align: center;\n    padding: 9% 0 4% 0;\n    color: white;\n    -webkit-clip-path: polygon(50% 12%, 100% 0, 100% 99%, 0 99%, 0 0);\n    clip-path: polygon(50% 12%, 100% 0, 100% 99%, 0 99%, 0 0);\n}\n\nli {\n    margin-right: 4%;\n    transition: all 0.2s ease-in-out;\n    -webkit-transition: all 0.2s ease-in-out;\n}\n\nli:hover {\n    cursor: pointer !important;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n\n.title {\n    margin-bottom: 5%;\n}\n\n.fill_container {\n    height: 90%;\n    width: 100%;\n    transition: all 0.2s ease-in-out;\n    -webkit-transition: all 0.2s ease-in-out;\n}\n\n.fill_container:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n\n/*#region Carousels */\n\n.modal-content {\n    background-color: #f0f0f0;\n}\n\n.owl-carousel {\n    height: 80%;\n    width: 50%;\n    transition: all 0.2s ease-in-out;\n    -webkit-transition: all 0.2s ease-in-out;\n}\n\n.owl-carousel:hover {\n    cursor: -webkit-grab;\n    cursor: grab;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n\n.owl-carousel:active {\n    cursor: -webkit-grabbing;\n    cursor: grabbing;\n}\n\n.owl-drag{\n    margin: auto !important;\n}\n\nngb-carousel {\n    outline: none !important;\n    margin-bottom: 3%;\n    border-right: 0.3px solid #a9a9a9;\n    box-shadow: 0.5px 0.5px 5px 1px #a9a9a9;\n    width: 100%;\n}\n\nngb-carousel:hover {\n    cursor: pointer;\n}\n\n.btn-margin {\n    margin-bottom: 3%;\n}\n\n/*#endregion */\n\n@media screen and (max-width: 600px){\n    .icon { height: 28px; width: 28px; }\n    .title { font-size: 1.5rem; margin-top: 6% }\n    .owl-carousel{ width: 70%; height: 10%}\n    .project_wrapper { \n        padding: 17% 0 5% 0;\n        color: white;\n        -webkit-clip-path: polygon(50% 12%, 100% 0, 100% 99%, 0 99%, 0 0);\n        clip-path: polygon(50% 12%, 100% 0, 100% 99%, 0 99%, 0 0);\n    }\n    .proj_img { margin-bottom: 3%}\n}\n\n@media screen and (min-height: 814px) and (max-height: 825px){\n    .project_wrapper { \n        height: 75vh;\n    }\n}\n\n@media screen and (max-height: 813px) {\n    .project_wrapper {\n        height: 68vh;\n    }\n    \n}\n\n@media screen and (max-height: 800px){\n    .project_wrapper {\n        height: 80vh;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpRUFBaUU7SUFDakUseURBQXlEO0FBQzdEOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztBQUVBLHFCQUFxQjs7QUFFckI7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxvQkFBWTtJQUFaLFlBQVk7SUFDWiw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLHVDQUF1QztJQUN2QyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBLGNBQWM7O0FBRWQ7SUFDSSxRQUFRLFlBQVksRUFBRSxXQUFXLEVBQUU7SUFDbkMsU0FBUyxpQkFBaUIsRUFBRSxlQUFlO0lBQzNDLGVBQWUsVUFBVSxFQUFFLFdBQVc7SUFDdEM7UUFDSSxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGlFQUFpRTtRQUNqRSx5REFBeUQ7SUFDN0Q7SUFDQSxZQUFZLGlCQUFpQjtBQUNqQzs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Rfd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOSUgMCA0JSAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgMTIlLCAxMDAlIDAsIDEwMCUgOTklLCAwIDk5JSwgMCAwKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDEyJSwgMTAwJSAwLCAxMDAlIDk5JSwgMCA5OSUsIDAgMCk7XG59XG5cbmxpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmxpOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi50aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5maWxsX2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmZpbGxfY29udGFpbmVyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4vKiNyZWdpb24gQ2Fyb3VzZWxzICovXG5cbi5tb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuXG4ub3dsLWNhcm91c2VsIHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vd2wtY2Fyb3VzZWw6aG92ZXIge1xuICAgIGN1cnNvcjogZ3JhYjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5vd2wtY2Fyb3VzZWw6YWN0aXZlIHtcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG4ub3dsLWRyYWd7XG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbm5nYi1jYXJvdXNlbCB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIGJvcmRlci1yaWdodDogMC4zcHggc29saWQgI2E5YTlhOTtcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCA1cHggMXB4ICNhOWE5YTk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbm5nYi1jYXJvdXNlbDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLW1hcmdpbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi8qI2VuZHJlZ2lvbiAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gICAgLmljb24geyBoZWlnaHQ6IDI4cHg7IHdpZHRoOiAyOHB4OyB9XG4gICAgLnRpdGxlIHsgZm9udC1zaXplOiAxLjVyZW07IG1hcmdpbi10b3A6IDYlIH1cbiAgICAub3dsLWNhcm91c2VseyB3aWR0aDogNzAlOyBoZWlnaHQ6IDEwJX1cbiAgICAucHJvamVjdF93cmFwcGVyIHsgXG4gICAgICAgIHBhZGRpbmc6IDE3JSAwIDUlIDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDEyJSwgMTAwJSAwLCAxMDAlIDk5JSwgMCA5OSUsIDAgMCk7XG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMTIlLCAxMDAlIDAsIDEwMCUgOTklLCAwIDk5JSwgMCAwKTtcbiAgICB9XG4gICAgLnByb2pfaW1nIHsgbWFyZ2luLWJvdHRvbTogMyV9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA4MTRweCkgYW5kIChtYXgtaGVpZ2h0OiA4MjVweCl7XG4gICAgLnByb2plY3Rfd3JhcHBlciB7IFxuICAgICAgICBoZWlnaHQ6IDc1dmg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODEzcHgpIHtcbiAgICAucHJvamVjdF93cmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiA2OHZoO1xuICAgIH1cbiAgICBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDgwMHB4KXtcbiAgICAucHJvamVjdF93cmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project_wrapper\" id=\"projects\">\n  <div class=\"svg_container\">\n    <h1 class=\"title\">Projects</h1>\n      <div class=\"row\">\n        <div class=\"col-0 col-sm-0 col-md-1 col-lg-1\"></div>\n        <div class=\"proj_img col-12 col-sm-12 col-md-5 col-lg-5\">\n          <img data-aos=\"flip-left\" data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"2000\" class=\"img-fluid fill_container\" data-toggle=\"modal\" data-target=\"#chappy_modal\" src=\"../../assets/images/chappySplash.png\" alt=\"Chappy splash page\">\n        </div>\n        <div class=\"proj_img col-12 col-sm-12 col-md-5 col-lg-5\">\n          <img data-aos=\"flip-right\" data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"2000\" class=\"img-fluid fill_container\" data-toggle=\"modal\" data-target=\"#setforsummer_modal\" src=\"../../assets/images/setforsummerSplash.png\" alt=\"setForSummer.org splash page\">\n        </div>\n        <div class=\"col-0 col-sm-0 col-md-1 col-lg-1\"></div>\n      </div>\n  </div>\n</div>\n  \n  <!-- Chappy Modal -->\n  <div class=\"modal fade\" id=\"chappy_modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"chappyTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Chappy</h5>\n          <ul style=\"margin-left: 4%\">\n            <li>\n              <a href=\"https://github.com/JamesFoley1/chappy\">\n                <img src=\"../../assets/images/GitHub-Mark-logo.png\" alt=\"Github Logo\">\n              </a>\n            </li>\n          </ul>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Chappy is a real-time chat app where you can host private channels and chat with other users!</p>\n            <ngb-carousel>\n              <ng-template ngbSlide>\n                <img class=\"img-fluid\" src=\"../../assets/images/chappySplash.png\" alt=\"Chappy splash page\">\n              </ng-template>\n              <ng-template ngbSlide>\n                <img class=\"img-fluid\" src=\"../../assets/images/ChapChap.jpg\" alt=\"Chappy message board image\">\n              </ng-template>\n            </ngb-carousel>\n        </div>\n        <div class=\"modal-footer center\">\n          <ul class=\"center\">\n            <li><img class=\"icon-sm\" src=\"../../assets/icons/javascript-logo.svg\" alt=\"JavaScript Logo\"><p>JavaScript</p></li>\n            <li><img class=\"icon-sm\" src=\"../../assets/icons/mongodb-logo.png\" alt=\"MongoDB Logo\"><p>MongoDB</p></li>\n            <li><img class=\"icon-sm\" src=\"../../assets/icons/express-logo.png\" alt=\"Express Logo\"><p>Express.js</p></li>\n            <li><img class=\"icon-sm\" src=\"../../assets/icons/angularjs-logo.svg\" alt=\"Angular Logo\"><p>Angular</p></li>\n            <li><img class=\"icon-sm\" src=\"../../assets/icons/nodejs-logo.svg\" alt=\"NodeJS Logo\"><p>Node.js</p></li>\n          </ul>\n        </div>\n        <div class=\"center btn-margin\">\n          <button type=\"button\" class=\"btn mybtn\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n      </div>\n    </div>\n  <!-- End Modal -->\n\n  <!-- Setforsummer Modal -->\n  <div class=\"modal fade\" id=\"setforsummer_modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"setforsummerTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">SetForSummer</h5>\n          <ul style=\"margin-left: 4%\">\n            <li>\n              <a href=\"https://github.com/sMirziteh/setForSummer\">\n                <img src=\"../../assets/images/GitHub-Mark-logo.png\" alt=\"Github Logo\">\n              </a>\n            </li>\n          </ul>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Set For Summer is a free online resource to connect underpriveleged families in Seattle to free food, education, or other services.</p>\n          <ngb-carousel id=\"ngb-carousel\">\n            <ng-template ngbSlide>\n              <img class=\"img-fluid\" src=\"../../assets/images/setforsummerSplash.png\" alt=\"setForSummer.org splash page\">\n            </ng-template>\n            <ng-template ngbSlide>\n              <img class=\"img-fluid\" src=\"../../assets/images/learning.png\" alt=\"setForSummer.org learning page\">\n            </ng-template>\n          </ngb-carousel>\n        </div>\n        <div class=\"modal-footer center\">\n          <ul>\n            <li><img class=\"icon-sm\" src=\"../../assets/icons/python-logo.svg\" alt=\"Python Logo\"><p>Python</p></li>\n            <li><img class=\"icon-sm\" src=\"../../assets/icons/Django-logo.png\" alt=\"Django Logo\"><p>Django</p></li>\n            <li><img class=\"icon-sm\" src=\"../../assets/icons/mysql-logo.png\" alt=\"MySQL Logo\"><p>MySQL</p></li>\n            <li><img class=\"icon-sm\" src=\"../../assets/icons/javascript-logo.svg\" alt=\"JavaScript Logo\"><p>JavaScript</p></li>\n            <li><img class=\"icon-sm\" src=\"../../assets/icons/materialize-logo.svg\" alt=\"Materialize Logo\"><p>Materialize</p></li>\n            <li><img class=\"icon-sm\" src=\"../../assets/icons/google-maps-logo.png\" alt=\"Google Maps API Logo\"><p>Google Maps API</p></li>\n          </ul>\n        </div>\n        <div class=\"center btn-margin\">\n          <button type=\"button\" class=\"btn mybtn\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End Modal -->\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () { };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resume {\n    position: relative;\n    width: 100%;\n    height: 100vh;\n}\n\n@media screen and (max-width: 600px){\n    .margin { margin-top: 40% }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVSxnQkFBZ0I7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdW1lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICAgIC5tYXJnaW4geyBtYXJnaW4tdG9wOiA0MCUgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<object class=\"resume\" data=\"../../assets/images/Resume.pdf\" type=\"application/pdf\">\n    <p class=\"margin center\">Your web browser doesn't have a PDF plugin. Instead you can \n        <a href=\"../../assets/images/Resume.pdf\">click here to download the PDF file.</a>\n    </p>\n</object>"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
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

module.exports = __webpack_require__(/*! /Users/james/Documents/donttouch/Portfolio/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map