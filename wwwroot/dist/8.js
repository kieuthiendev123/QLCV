webpackJsonp([8],{

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_component__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_routing__ = __webpack_require__(827);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__store_routing__["a" /* StoreRoutes */])],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__store_component__["a" /* StoreComponent */]]
        })
    ], StoreModule);
    return StoreModule;
}());

;


/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StoreComponent = /** @class */ (function () {
    function StoreComponent() {
    }
    StoreComponent.prototype.ngOnInit = function () {
    };
    StoreComponent.prototype.ngAfterViewInit = function () {
    };
    StoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(825),
            styles: [__webpack_require__(826)]
        })
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content message-layout\">\r\n  <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n          <div class=\"first-col col-message-list\">\r\n              col 1\r\n          </div>\r\n          <div class=\"row second-col\">\r\n              <div class=\"col-sm-6 col-message-box\">\r\n                  col 2\r\n              </div>\r\n              <div class=\"col-sm-6 col-message-info\">\r\n                  col 3\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_component__ = __webpack_require__(758);

var StoreRoutes = [
    {
        path: '',
        children: [{
                path: 'store',
                component: __WEBPACK_IMPORTED_MODULE_0__store_component__["a" /* StoreComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=8.js.map