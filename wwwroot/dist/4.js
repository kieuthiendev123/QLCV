webpackJsonp([4],{

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsModule", function() { return PatientsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bs3_modal__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__patients_routing__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_index__ = __webpack_require__(681);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PatientsModule = /** @class */ (function () {
    function PatientsModule() {
    }
    PatientsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_8__patients_routing__["a" /* PatientsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_bs3_modal__["b" /* BsModalModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__index__["a" /* PatientsEditComponent */], __WEBPACK_IMPORTED_MODULE_7__index__["b" /* PatientsListComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_index__["g" /* ExamService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index__["h" /* FeeService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index__["q" /* RoomService */]
            ]
        })
    ], PatientsModule);
    return PatientsModule;
}());



/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__room_service__ = __webpack_require__(708);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_0__room_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cls_service__ = __webpack_require__(709);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__cls_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clsindex_service__ = __webpack_require__(710);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__clsindex_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icd_service__ = __webpack_require__(711);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__icd_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fee_service__ = __webpack_require__(712);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__fee_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_service__ = __webpack_require__(713);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__account_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__exam_service__ = __webpack_require__(714);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__exam_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__accountant_service__ = __webpack_require__(715);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__accountant_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__doctor_service__ = __webpack_require__(716);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_8__doctor_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__welfare_service__ = __webpack_require__(717);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_9__welfare_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__project_service__ = __webpack_require__(718);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_10__project_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__comment_service__ = __webpack_require__(719);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_11__comment_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__projecttask_service__ = __webpack_require__(720);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_12__projecttask_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__otherlist_service__ = __webpack_require__(721);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_13__otherlist_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__otherlisttype_service__ = __webpack_require__(722);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_14__otherlisttype_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__personproject_service__ = __webpack_require__(723);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_15__personproject_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sprint_service__ = __webpack_require__(724);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_16__sprint_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_service__ = __webpack_require__(725);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Authgruop_service__ = __webpack_require__(726);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__permission_service__ = __webpack_require__(727);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_19__permission_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__permissiongroup_service__ = __webpack_require__(728);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_20__permissiongroup_service__["a"]; });























/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cls__ = __webpack_require__(684);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fee__ = __webpack_require__(685);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__fee__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clsindex__ = __webpack_require__(686);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room__ = __webpack_require__(687);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_3__room__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icd__ = __webpack_require__(688);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__patients__ = __webpack_require__(689);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__patients__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__patientsvoucher__ = __webpack_require__(690);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__patientsvoucher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account__ = __webpack_require__(691);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__account__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__exam__ = __webpack_require__(692);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__exam__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__welfare__ = __webpack_require__(693);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Project__ = __webpack_require__(694);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10__Project__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__comment__ = __webpack_require__(695);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_11__comment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__projecttask__ = __webpack_require__(696);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_12__projecttask__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__otherlist__ = __webpack_require__(697);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_13__otherlist__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__otherlisttype__ = __webpack_require__(698);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_14__otherlisttype__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__PersonProject__ = __webpack_require__(699);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_15__PersonProject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sprint__ = __webpack_require__(700);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_16__sprint__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__permission__ = __webpack_require__(701);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_17__permission__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__permissionDetail__ = __webpack_require__(702);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_18__permissionDetail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth__ = __webpack_require__(703);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__authgruop__ = __webpack_require__(704);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__perissiongroup__ = __webpack_require__(705);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_21__perissiongroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__perdetail__ = __webpack_require__(706);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__company__ = __webpack_require__(707);
/* unused harmony namespace reexport */


























/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CanLamSang */
var CanLamSang = /** @class */ (function () {
    function CanLamSang() {
    }
    return CanLamSang;
}());



/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fee; });
var Fee = /** @class */ (function () {
    function Fee() {
    }
    return Fee;
}());



/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChiSoCLS */
var ChiSoCLS = /** @class */ (function () {
    function ChiSoCLS() {
    }
    return ChiSoCLS;
}());



/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
var Room = /** @class */ (function () {
    function Room() {
    }
    return Room;
}());



/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ICD */
var ICD = /** @class */ (function () {
    function ICD() {
    }
    return ICD;
}());



/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patients; });
var Patients = /** @class */ (function () {
    function Patients() {
    }
    return Patients;
}());



/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientsVoucher; });
var PatientsVoucher = /** @class */ (function () {
    function PatientsVoucher() {
    }
    return PatientsVoucher;
}());



/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Account; });
var Account = /** @class */ (function () {
    function Account() {
    }
    return Account;
}());



/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exam; });
var Exam = /** @class */ (function () {
    function Exam() {
    }
    return Exam;
}());



/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Welfare */
var Welfare = /** @class */ (function () {
    function Welfare() {
    }
    return Welfare;
}());



/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());



/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectTask; });
var ProjectTask = /** @class */ (function () {
    function ProjectTask() {
    }
    return ProjectTask;
}());



/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherList; });
var OtherList = /** @class */ (function () {
    function OtherList() {
    }
    return OtherList;
}());



/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherListType; });
var OtherListType = /** @class */ (function () {
    function OtherListType() {
    }
    return OtherListType;
}());



/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonProject; });
var PersonProject = /** @class */ (function () {
    function PersonProject() {
    }
    return PersonProject;
}());



/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sprint; });
var Sprint = /** @class */ (function () {
    function Sprint() {
    }
    return Sprint;
}());



/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Permission; });
var Permission = /** @class */ (function () {
    function Permission() {
    }
    return Permission;
}());



/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionDetail; });
var PermissionDetail = /** @class */ (function () {
    function PermissionDetail() {
    }
    return PermissionDetail;
}());



/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export auth */
var auth = /** @class */ (function () {
    function auth() {
    }
    return auth;
}());



/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authgruop */
var authgruop = /** @class */ (function () {
    function authgruop() {
    }
    return authgruop;
}());



/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionGroup; });
var PermissionGroup = /** @class */ (function () {
    function PermissionGroup() {
    }
    return PermissionGroup;
}());



/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PerDetail */
var PerDetail = /** @class */ (function () {
    function PerDetail() {
    }
    return PerDetail;
}());



/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Company */
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());



/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomService = /** @class */ (function () {
    function RoomService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    RoomService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    RoomService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    RoomService.prototype.list = function (model) {
        var url = '/api/room/list';
        var body = {
            'name': model.name,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    RoomService.prototype.get = function (model) {
        var url = '/api/room/get';
        var body = {
            'id': model.id
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    RoomService.prototype.insert = function (model) {
        var url = '/api/room/create';
        var body = {
            'code': model.code,
            'name': model.name
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    RoomService.prototype.update = function (model) {
        var url = '/api/room/update';
        var body = {
            'id': model.id,
            'code': model.code,
            'name': model.name
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    RoomService.prototype.delete = function (model) {
        var url = '/api/room/delete/' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    RoomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLSService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CLSService = /** @class */ (function () {
    function CLSService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    CLSService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    CLSService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    CLSService.prototype.list = function (model) {
        var url = '/api/cls/list';
        var body = {
            'name': model.name,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    CLSService.prototype.get = function (model) {
        var url = '/api/cls/get';
        var body = {
            'id': model.id
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    CLSService.prototype.insert = function (model) {
        var url = '/api/cls/create';
        var body = {
            'code': model.code,
            'name': model.name,
            'price': model.price,
            'priceIns': model.priceIns,
            'effectDate': model.effectDate,
            'note': model.note,
            'parentId': model.parentId ? model.parentId : 0
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    CLSService.prototype.update = function (model) {
        var url = '/api/cls/update';
        var body = {
            'id': model.id,
            'code': model.code,
            'name': model.name,
            'price': model.price,
            'priceIns': model.priceIns,
            'effectDate': model.effectDate,
            'note': model.note,
            'parentId': model.parentId
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    CLSService.prototype.delete = function (model) {
        var url = '/api/cls/delete/' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    CLSService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CLSService);
    return CLSService;
}());



/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLSIndexService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CLSIndexService = /** @class */ (function () {
    function CLSIndexService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    CLSIndexService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    CLSIndexService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    CLSIndexService.prototype.list = function (model) {
        var url = '/api/clsindex/list';
        var body = {
            'name': model.name,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    CLSIndexService.prototype.get = function (model) {
        var url = '/api/clsindex/get';
        var body = {
            'id': model.id
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    CLSIndexService.prototype.insert = function (model) {
        var url = '/api/clsindex/create';
        var body = {
            'code': model.code,
            'name': model.name,
            'price': model.price,
            'priceIns': model.priceIns,
            'isLock': model.isLock
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    CLSIndexService.prototype.update = function (model) {
        var url = '/api/clsindex/update';
        var body = {
            'id': model.id,
            'code': model.code,
            'name': model.name,
            'price': model.price,
            'priceIns': model.priceIns,
            'isLock': model.isLock
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    CLSIndexService.prototype.delete = function (model) {
        var url = '/api/clsindex/delete/' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    CLSIndexService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CLSIndexService);
    return CLSIndexService;
}());



/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ICDService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ICDService = /** @class */ (function () {
    function ICDService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    ICDService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    ICDService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    ICDService.prototype.list = function (model) {
        var url = '/api/icd/list';
        var body = {
            'name': model.name,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ICDService.prototype.get = function (model) {
        var url = '/api/icd/get';
        var body = {
            'id': model.id
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ICDService.prototype.insert = function (model) {
        var url = '/api/icd/create';
        var body = {
            'code': model.code,
            'name': model.name
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    ICDService.prototype.update = function (model) {
        var url = '/api/icd/update';
        var body = {
            'id': model.id,
            'code': model.code,
            'name': model.name
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    ICDService.prototype.delete = function (model) {
        var url = '/api/icd/delete/' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    ICDService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ICDService);
    return ICDService;
}());



/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeeService = /** @class */ (function () {
    function FeeService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    FeeService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    FeeService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    FeeService.prototype.list = function (model) {
        var url = '/api/fee/list';
        var body = {
            'name': model.name,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    FeeService.prototype.get = function (model) {
        var url = '/api/fee/get';
        var body = {
            'id': model.id
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    FeeService.prototype.insert = function (model) {
        var url = '/api/fee/create';
        var body = {
            'code': model.code,
            'name': model.name,
            'price': model.price,
            'priceIns': model.priceIns
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    FeeService.prototype.update = function (model) {
        var url = '/api/fee/update';
        var body = {
            'id': model.id,
            'code': model.code,
            'name': model.name,
            'price': model.price,
            'priceIns': model.priceIns
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    FeeService.prototype.delete = function (model) {
        var url = '/api/fee/delete/' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    FeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], FeeService);
    return FeeService;
}());



/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    AccountService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    AccountService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    AccountService.prototype.listOther = function (model) {
        var url = '/api/OtherList/list';
        var body = {
            'name': model.name,
            'pageNo': 1,
            'pageSize': 50
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) {
            // console.log(res);
            // console.log(res.json());
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    AccountService.prototype.list = function (model) {
        var url = '/api/account/list';
        var body = {
            'fullname': model.fullName,
            'pageNo': 1,
            'pageSize': 10
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    AccountService.prototype.get = function (model) {
        var url = '/api/account/get';
        var body = {
            'id': model.id
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    AccountService.prototype.insert = function (model) {
        var url = '/api/account/create';
        var body = {
            'userName': model.userName,
            'fullName': model.fullName,
            'password': model.password,
            'email': model.email,
            'address': model.address,
            'status': model.status,
            'permissionid': model.permissionid,
            'comment': null,
            'otherListId': model.otherListId,
            'otherListName': model.otherListName,
            'phoneNumber': model.phoneNumber
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    AccountService.prototype.update = function (model) {
        var url = '/api/Account/UpdateUser';
        var body = {
            'id': model.id,
            'userName': model.userName,
            'fullName': model.fullName,
            'password': model.password,
            'email': model.email,
            'address': model.address,
            'status': model.status,
            'permissionid': model.permissionid,
            'comment': null,
            'otherListId': model.otherListId,
            'otherListName': model.otherListName,
            'phoneNumber': model.phoneNumber
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    AccountService.prototype.delete = function (model) {
        var url = '/api/account/delete/' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExamService = /** @class */ (function () {
    function ExamService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    ExamService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    ExamService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    ExamService.prototype.listAll = function (model) {
        var url = '/api/medicalExamination/listall';
        var body = {
            'pageNo': 1,
            'pageSize': 10
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ExamService.prototype.listByDoctor = function (model) {
        var url = '/api/medicalExamination/listByDocter';
        var body = {
            'code': model.code,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ExamService.prototype.get = function (model) {
        var url = '/api/medicalExamination/get' + '?id=' + model.id;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.get(url, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ExamService.prototype.call = function (id) {
        var url = '/api/medicalExamination/call';
        var body = {
            'id': id
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ExamService.prototype.insert = function (model) {
        var url = '/api/MedicalExamination/Create';
        var body = {
            'fullName': model.fullName,
            'address': model.address,
            'gender': model.gender,
            'birthYear': model.birthYear,
            'EffectDate': model.EffectDate,
            'phone': model.phone,
            'city': model.city,
            'district': model.district,
            'ward': model.ward,
            'insCode': model.insCode,
            'insStartDate': model.insStartDate,
            'hospitalRegis': model.hospitalRegis,
            'insInputCard': model.insStartDate,
            'insEndDate': model.insEndDate,
            'dayOfExamination': new Date(),
            'feeId': model.feeId,
            'roomId': model.roomId,
            'reason': model.reason
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        console.log(options);
        return this.http.post(url, body, options);
    };
    ExamService.prototype.update = function (model) {
        var url = '/api/MedicalExamination/Update';
        var body = {
            'id': model.id,
            'fullName': model.fullName,
            'gender': model.gender,
            'birthYear': model.birthYear,
            'EffectDate': model.EffectDate,
            'phone': model.phone,
            'city?': model.city,
            'district': model.district,
            'ward': model.ward,
            'insCode?': model.insCode,
            'insStartDate?': model.insStartDate,
            'insEndDate?': model.insEndDate,
            'dayOfExamination': new Date(),
            'feeId': model.feeId,
            'roomId': model.roomId,
            'Reason': model.reason
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        console.log(body);
        return this.http.post(url, body, options);
    };
    ExamService.prototype.delete = function (model) {
        var url = '/api/medicalExamination/delete/' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    ExamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ExamService);
    return ExamService;
}());



/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountantService = /** @class */ (function () {
    function AccountantService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    AccountantService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    AccountantService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    AccountantService.prototype.list = function (model) {
        var url = '/api/accountant/list';
        var body = {
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    AccountantService.prototype.listCashFlow = function (type) {
        var url = '/api/accountant/listCashFlow';
        var body = {
            'type': type,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    AccountantService.prototype.paymentCashflow = function (id) {
        var url = '/api/accountant/pay?id=' + id;
        var body = {};
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    AccountantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AccountantService);
    return AccountantService;
}());



/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DoctorService = /** @class */ (function () {
    function DoctorService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    DoctorService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    DoctorService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    DoctorService.prototype.listPatients = function (status, search) {
        var url = '/api/MedicalExamination/ListByDocter';
        var body = {
            "PageNo": 1,
            "PageSize": 10,
            "Status": status,
            "code": search
        };
        console.log(body);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    DoctorService.prototype.callKham = function (id) {
        var url = '/api/MedicalExamination/Call?id=' + id;
        var body = {};
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    DoctorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], DoctorService);
    return DoctorService;
}());



/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelfareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelfareService = /** @class */ (function () {
    function WelfareService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    WelfareService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    WelfareService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    WelfareService.prototype.list = function (model) {
        var url = '/api/welfare/list';
        var body = {
            'name': model.name,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    WelfareService.prototype.get = function (model) {
        var url = '/api/welfare/get';
        var body = {
            'id': model.id
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    WelfareService.prototype.insert = function (model) {
        var url = '/api/welfare/create';
        var body = {
            'code': model.code,
            'name': model.name,
            'price': model.price,
            'priceIns': model.priceIns
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    WelfareService.prototype.update = function (model) {
        var url = '/api/welfare/update';
        var body = {
            'id': model.id,
            'code': model.code,
            'name': model.name,
            'price': model.price,
            'priceIns': model.priceIns
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    WelfareService.prototype.delete = function (model) {
        var url = '/api/welfare/delete/' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    WelfareService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], WelfareService);
    return WelfareService;
}());



/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    ProjectService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    ProjectService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    ProjectService.prototype.list = function (model) {
        var url = '/api/Project/List';
        var body = {
            'codeProject': model.codeProject,
            'nameProject': model.nameProject,
            'pageNo': 1,
            'pageSize': 50
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectService.prototype.get = function (model) {
        var url = '/api/Project/get';
        var body = {
            'id': model.id,
            'codeProject': model.codeProject,
            'nameProject': model.nameProject,
            'startDate': model.startDate,
            'endDate': model.endDate,
            'note': model.note
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectService.prototype.insert = function (model) {
        var url = '/api/Project/create';
        var body = {
            'codeProject': model.codeProject,
            'nameProject': model.nameProject,
            'startDate': model.startDate,
            'endDate': model.endDate,
            'note': model.note
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    ProjectService.prototype.update = function (model) {
        var url = '/api/Project/update';
        var body = {
            'id': model.id,
            'codeProject': model.codeProject,
            'nameProject': model.nameProject,
            'startDate': model.startDate,
            'endDate': model.endDate,
            'note': model.note
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    ProjectService.prototype.delete = function (model) {
        var url = '/api/project/delete/' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    CommentService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    CommentService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    CommentService.prototype.list = function (model) {
        var url = '/api/Comment/List';
        var body = {
            'code': model.codeComment,
            'name': model.content,
            'pageNo': 1,
            'pageSize': 50
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    CommentService.prototype.get = function (model) {
        var url = '/api/Comment/Get';
        var body = {
            'id': model.id
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    CommentService.prototype.insert = function (model) {
        var url = '/api/Comment/Create';
        var body = {
            'idPersonComment': model.idPersonComment,
            'content': model.content,
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    CommentService.prototype.update = function (model) {
        var url = '/api/Comment/Update';
        var body = {
            'id': model.id,
            'idPersonComment': model.idPersonComment,
            'content': model.content
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    CommentService.prototype.delete = function (model) {
        var url = '/api/Comment/delete/' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectTaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectTaskService = /** @class */ (function () {
    function ProjectTaskService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    ProjectTaskService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    ProjectTaskService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    ProjectTaskService.prototype.list = function (model) {
        var url = '/api/CongViec/List';
        var body = {
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectTaskService.prototype.listDetail = function (model) {
        var url = '/api/CongViec/List';
        var body = {
            'Id': model.id,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectTaskService.prototype.listStatus = function () {
        var url = '/api/CongViec/List';
        var body = {
            'status': 0,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectTaskService.prototype.listProject = function (model) {
        var url = '/api/Project/List';
        var body = {
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectTaskService.prototype.listSprint = function (model) {
        var url = '/api/CongViec/ListSprint';
        var body = {
            'Id_Project': model.idDuAn,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectTaskService.prototype.listStatus00 = function (model) {
        var url = '/api/CongViec/List';
        var body = {
            'Id_Sprint': model.idSprint,
            'Id_Project': model.idDuAn,
            'status': 0,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectTaskService.prototype.listStatus11 = function (model) {
        var url = '/api/CongViec/List';
        var body = {
            'Id_Sprint': model.idSprint,
            'Id_Project': model.idDuAn,
            'status': 1,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectTaskService.prototype.listStatus0 = function () {
        var url = '/api/CongViec/List';
        var body = {
            'status': 0,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectTaskService.prototype.listStatus1 = function () {
        var url = '/api/CongViec/List';
        var body = {
            'status': 1,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectTaskService.prototype.listMucDo = function (model) {
        var url = '/api/OtherList/ListMucDo';
        var body = {
            'id': 2,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectTaskService.prototype.listStatus2 = function () {
        var url = '/api/CongViec/List';
        var body = {
            'status': 2,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectTaskService.prototype.listStatus3 = function () {
        var url = '/api/CongViec/List';
        var body = {
            'status': 3,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectTaskService.prototype.listStatus4 = function () {
        var url = '/api/CongViec/List';
        var body = {
            'status': 4,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectTaskService.prototype.get = function (model) {
        var url = '/api/CongViec/Get';
        var body = {
            'id': model.id
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    ProjectTaskService.prototype.insert = function (model) {
        var url = '/api/CongViec/Create';
        var body = {
            'idDuAn': model.idDuAn,
            'idSprint': model.idSprint,
            'nameCV': model.nameCV,
            'codeCV': model.codeCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'pStatus': model.pStatus,
            'levelTask': model.levelTask,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec,
            'Status': model.pStatus
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    ProjectTaskService.prototype.update = function (model) {
        var url = '/api/CongViec/update';
        var body = {
            'id': model.id,
            'idDuAn': model.idDuAn,
            'idSprint': model.idSprint,
            'codeCV': model.codeCV,
            'nameCV': model.nameCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'levelTask': model.levelTask,
            'pStatus': model.pStatus,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    ProjectTaskService.prototype.TaskUnassigned = function (model) {
        var url = '/api/CongViec/update';
        var body = {
            'id': model.id,
            'idDuAn': model.idDuAn,
            'idSprint': model.idSprint,
            'codeCV': model.codeCV,
            'nameCV': model.nameCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'levelTask': model.levelTask,
            'pStatus': 0,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    ProjectTaskService.prototype.TaskAssigned = function (model) {
        var url = '/api/CongViec/update';
        var body = {
            'id': model.id,
            'idDuAn': model.idDuAn,
            'idSprint': model.idSprint,
            'codeCV': model.codeCV,
            'nameCV': model.nameCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'levelTask': model.levelTask,
            'pStatus': 1,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec,
            'Status': model.pStatus
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    ProjectTaskService.prototype.ChangeStatus = function (model) {
        var url = '/api/CongViec/ChangeStatus';
        var body = {
            'id': model.id,
            'idDuAn': model.idDuAn,
            'codeCV': model.codeCV,
            'nameCV': model.nameCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'levelTask': model.levelTask,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec,
            'pStatus': 0
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    ProjectTaskService.prototype.ChangeStatusOne = function (model) {
        var url = '/api/CongViec/ChangeStatusOne';
        var body = {
            'id': model.id,
            'idDuAn': model.idDuAn,
            'codeCV': model.codeCV,
            'nameCV': model.nameCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'levelTask': model.levelTask,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec,
            'pStatus': 1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    ProjectTaskService.prototype.ChangeStatusTwo = function (model) {
        var url = '/api/CongViec/ChangeStatusTwo';
        var body = {
            'id': model.id,
            'idDuAn': model.idDuAn,
            'codeCV': model.codeCV,
            'nameCV': model.nameCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'levelTask': model.levelTask,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec,
            'pStatus': 2
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    ProjectTaskService.prototype.ChangeStatusThree = function (model) {
        var url = '/api/CongViec/ChangeStatusThree';
        var body = {
            'id': model.id,
            'idDuAn': model.idDuAn,
            'codeCV': model.codeCV,
            'nameCV': model.nameCV,
            'typeCV': model.typeCV,
            'overview': model.overview,
            'contentTask': model.contentTask,
            'timeTask': model.timeTask,
            'levelTask': model.levelTask,
            'idNguoiTaoViec': model.idNguoiTaoViec,
            'idNguoiGanViec': model.idNguoiGanViec,
            'pStatus': 3
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    ProjectTaskService.prototype.delete = function (model) {
        var url = 'api/CongViec/delete/' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    ProjectTaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ProjectTaskService);
    return ProjectTaskService;
}());



/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OtherListService = /** @class */ (function () {
    function OtherListService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    OtherListService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    OtherListService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    OtherListService.prototype.listOtherListType = function (model) {
        var url = '/api/OtherListType/list';
        var body = {
            'name': model.name,
            'pageNo': 1,
            'pageSize': 50
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) {
            console.log(res);
            console.log(res.json());
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    OtherListService.prototype.list = function (model) {
        var url = '/api/OtherList/list';
        var body = {
            'name': model.name,
            'pageNo': 1,
            'pageSize': 50
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) {
            console.log(res);
            console.log(res.json());
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    OtherListService.prototype.get = function (model) {
        var url = '/api/OtherList/get';
        var body = {
            'id': model.id
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    OtherListService.prototype.insert = function (model) {
        var url = '/api/OtherList/create';
        var body = {
            'name': model.name,
            'typeId': model.typeId
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    OtherListService.prototype.update = function (model) {
        var url = '/api/OtherList/Update';
        var body = {
            'id': model.id,
            'name': model.name,
            'typeId': model.typeId
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    OtherListService.prototype.delete = function (model) {
        var url = '/api/OtherList/delete/' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    OtherListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], OtherListService);
    return OtherListService;
}());



/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherListTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OtherListTypeService = /** @class */ (function () {
    function OtherListTypeService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    OtherListTypeService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    OtherListTypeService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    OtherListTypeService.prototype.list = function (model) {
        var url = '/api/OtherListType/List';
        var body = {
            'name': model.name,
            'pageNo': 1,
            'pageSize': 50
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    OtherListTypeService.prototype.get = function (model) {
        var url = '/api/OtherListType/get';
        var body = {
            'id': model.id
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    OtherListTypeService.prototype.insert = function (model) {
        var url = '/api/OtherListType/create';
        var body = {
            'name': model.name
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    OtherListTypeService.prototype.update = function (model) {
        var url = '/api/OtherListType/update';
        var body = {
            'id': model.id,
            'name': model.name
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    OtherListTypeService.prototype.delete = function (model) {
        var url = '/api/OtherListType/delete/' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    OtherListTypeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], OtherListTypeService);
    return OtherListTypeService;
}());



/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonProjectService = /** @class */ (function () {
    function PersonProjectService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    PersonProjectService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    PersonProjectService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    PersonProjectService.prototype.listDuAn = function (model) {
        var url = '/api/Project/List';
        var body = {
            'name': model.nameProject,
            'pageNo': 1,
            'pageSize': 50
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    PersonProjectService.prototype.listDataUsers = function (model) {
        var url = '/api/account/list';
        var body = {
            'fullname': model.fullName,
            'pageNo': 1,
            'pageSize': 10
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    PersonProjectService.prototype.list = function (model) {
        var url = '/api/personproject/list';
        var body = {
            'id': model.PersonProjectId,
            'code': '',
            'name': model.UsersName,
            'pageNo': 1,
            'pageSize': 50
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    PersonProjectService.prototype.insert = function (model) {
        var url = '/api/personproject/create';
        var body = {
            'UsersId': model.UsersId,
            'ProjectId': model.PersonProjectId,
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    PersonProjectService.prototype.update = function (model) {
        var url = '/api/personproject/update';
        var body = {
            'Id': model.id,
            'UsersId': model.UsersId,
            'ProjectId': model.PersonProjectId,
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    PersonProjectService.prototype.delete = function (model) {
        var url = '/api/PersonProject/Delete/' + model.id;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    PersonProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], PersonProjectService);
    return PersonProjectService;
}());



/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SprintService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SprintService = /** @class */ (function () {
    function SprintService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    SprintService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    SprintService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    SprintService.prototype.list = function (model) {
        var url = '/api/Sprint/List';
        var body = {
            'Id_Project': model.idProject,
            'pageNo': 1,
            'pageSize': 50
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    SprintService.prototype.getListSprint = function (model) {
        var url = '/api/CongViec/ListSprint';
        var body = {
            'Id_Project': model.idDuAn,
            'pageNo': 1,
            'pageSize': 50
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    SprintService.prototype.getListProject = function () {
        var url = '/api/Project/List';
        var body = {
            'pageNo': 1,
            'pageSize': 50
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    SprintService.prototype.get = function (model) {
        var url = '/api/Sprint/Get';
        var body = {
            'Id': model.Id,
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    SprintService.prototype.insert = function (model) {
        var url = '/api/Sprint/Create';
        var body = {
            'idProject': model.idProject,
            'nameSprint': model.nameSprint,
            'startDate': model.startDate,
            'endDate': model.endDate,
            'timeExtension': model.timeExtension,
            'statusSprint': model.statusSprint,
            'Note': model.note,
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    SprintService.prototype.update = function (model) {
        var url = '/api/Sprint/Update';
        var body = {
            'Id': model.Id,
            'idProject': model.idProject,
            'nameSprint': model.nameSprint,
            'startDate': model.startDate,
            'endDate': model.endDate,
            'timeExtension': model.timeExtension,
            'statusSprint': model.statusSprint,
            'Note': model.note,
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    SprintService.prototype.delete = function (model) {
        var url = '/api/Comment/delete/' + model.Id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    SprintService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], SprintService);
    return SprintService;
}());



/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var authService = /** @class */ (function () {
    function authService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    authService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    authService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    authService.prototype.list = function (model) {
        var url = '/api/Auth/List';
        var body = {
            'codeProject': model.codeAuth,
            'nameProject': model.nameAuth,
            'pageNo': 1,
            'pageSize': 50
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    authService.prototype.get = function (model) {
        var url = '/api/Auth/Get';
        var body = {
            'id': model.id,
            'codeAuth': model.codeAuth,
            'nameAuth': model.nameAuth,
            'description': model.description
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    authService.prototype.insert = function (model) {
        var url = '/api/Auth/Create';
        var body = {
            'codeAuth': model.codeAuth,
            'nameAuth': model.nameAuth,
            'description': model.description
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    authService.prototype.update = function (model) {
        var url = '/api/Auth/Update';
        var body = {
            'codeAuth': model.codeAuth,
            'nameAuth': model.nameAuth,
            'description': model.description
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    authService.prototype.delete = function (model) {
        var url = '/api/Auth/Delete' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    authService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], authService);
    return authService;
}());



/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AuthgruopService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthgruopService = /** @class */ (function () {
    function AuthgruopService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    AuthgruopService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    AuthgruopService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    AuthgruopService.prototype.list = function (model) {
        var url = '/api/authgruop/List';
        var body = {
            'code': model.codeAuthgr,
            'name': model.nameAuthgr,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    AuthgruopService.prototype.get = function (model) {
        var url = '/api/authgruop/Get';
        var body = {
            'id': model.id
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    AuthgruopService.prototype.insert = function (model) {
        var url = '/api/authgruop/Create';
        var body = {
            'id': model.id,
            'codeAuthgr': model.codeAuthgr,
            'nameAuthgr': model.nameAuthgr,
            'auth_id': model.auth_id,
            'auth_name': model.auth_name,
            'note': model.note,
            'status': model.status,
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    AuthgruopService.prototype.update = function (model) {
        var url = '/api/authgruop/update';
        var body = {
            'id': model.id,
            'codeAuthgr': model.codeAuthgr,
            'nameAuthgr': model.nameAuthgr,
            'auth_id': model.auth_id,
            'auth_name': model.auth_name,
            'note': model.note,
            'status': model.status,
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    AuthgruopService.prototype.delete = function (model) {
        var url = 'api/authgruop/delete/' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    AuthgruopService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthgruopService);
    return AuthgruopService;
}());



/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PermissionService = /** @class */ (function () {
    function PermissionService(http) {
        this.http = http;
        this.token = '';
        this.token = localStorage.getItem('token');
    }
    PermissionService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    PermissionService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    PermissionService.prototype.list = function (model) {
        var url = '/api/PermissionGroup/List';
        var body = {
            'name': model.name,
            'pageNo': 1,
            'pageSize': 50
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    PermissionService.prototype.listDetail = function (model) {
        var url = '/api/PermissionDetail/ListDetail';
        var body = {
            'Id': model.id,
            'IdP': model.permissionId,
            'pageNo': 1,
            'pageSize': -1
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    // get(model: OtherListType) {
    //     const url = '/api/OtherListType/get';
    //     const body = {
    //         'id': model.id
    //     };
    //     const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
    //     return this.http.post(url, body, options)
    //         .map(res => res.json())
    //         .catch(error => {
    //             return Observable.throw(error.json());
    //         });
    // }
    PermissionService.prototype.insert = function (model) {
        var url = '/api/PermissionGroup/create';
        var body = {
            'Name': model.name
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    PermissionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], PermissionService);
    return PermissionService;
}());



/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionGroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PermissionGroupService = /** @class */ (function () {
    function PermissionGroupService(http) {
        this.http = http;
        this.token = '';
        this.string = "1,2,3,4,5,6";
        this.token = localStorage.getItem('token');
    }
    PermissionGroupService.prototype.getCommonHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    PermissionGroupService.prototype.getHeaderWithToken = function () {
        var header = this.getCommonHeader();
        header.append('Authorization', 'Bearer ' + this.token);
        return header;
    };
    PermissionGroupService.prototype.list = function (model) {
        var url = '/api/PermissionGroup/List';
        var body = {
            'name': model.name,
            'pageNo': 1,
            'pageSize': 50
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        });
    };
    PermissionGroupService.prototype.getAllPermission = function (category, search) {
        var url = '/api/Permission/GetAll';
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: this.getHeaderWithToken(),
            url: url
        });
        return this.http.get(url, options).map(function (response) {
            var data = response.json();
            return data;
        });
    };
    PermissionGroupService.prototype.getAllWhere = function (listString) {
        var url = '/api/Permission/GetAllWhere?ids2=' + listString;
        // console.log(url);S
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: this.getHeaderWithToken(),
            url: url
        });
        return this.http.get(url, options).map(function (response) {
            var data = response.json();
            return data;
        });
    };
    // get(model: OtherListType) {
    //     const url = '/api/OtherListType/get';
    //     const body = {
    //         'id': model.id
    //     };
    //     const options = new RequestOptions({ headers: this.getHeaderWithToken(), url: url, body: body });
    //     return this.http.post(url, body, options)
    //         .map(res => res.json())
    //         .catch(error => {
    //             return Observable.throw(error.json());
    //         });
    // }
    PermissionGroupService.prototype.insert = function (model) {
        var url = '/api/PermissionGroup/create';
        var body = {
            'Name': model.name
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    PermissionGroupService.prototype.update = function (model) {
        var url = '/api/PermissionGroup/update';
        var body = {
            'Id': model.id,
            'Name': model.name
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url, body: body });
        return this.http.post(url, body, options);
    };
    PermissionGroupService.prototype.delete = function (model) {
        var url = '/api/PermissionGroup/delete/' + model.id.toString();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.getHeaderWithToken(), url: url });
        return this.http.delete(url, options);
    };
    PermissionGroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], PermissionGroupService);
    return PermissionGroupService;
}());



/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_list_component__ = __webpack_require__(800);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__list_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_edit_component__ = __webpack_require__(802);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__edit_edit_component__["a"]; });




/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var PatientsListComponent = /** @class */ (function () {
    function PatientsListComponent(_document, dataService, toastyService, route) {
        this._document = _document;
        this.dataService = dataService;
        this.toastyService = toastyService;
        this.route = route;
        this.state_type = "new";
        this.list_data = [];
        this.list_search_room = [];
        // Toast Option
        this.toastOptions = {
            title: "",
            msg: "",
            showClose: true,
            timeout: 5000,
            theme: "default"
        };
        this._document.title = "Danh sách chờ khám";
    }
    PatientsListComponent.prototype.ngOnInit = function () {
        this.obj_remove = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Exam */]();
        this.obj_edit = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Exam */]();
        this.obj_search = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Exam */]();
        this.loadList();
    };
    PatientsListComponent.prototype.ngAfterViewInit = function () { };
    PatientsListComponent.prototype.search = function () {
        this.loadList();
    };
    PatientsListComponent.prototype.showSearchListRoom = function (event) {
        console.log(event.target.value);
        if (event.target.value != null) {
            this.list_data = [];
            // kiểm tra độ dài của ô search > 0 thì bđ tìm kiếm
            // if (this.customer_order && this.customer_order.name_customer && this.customer_order.name_customer.length > 0) {
            if (event.target.value.length > 0) {
                for (var i = 0; i < this.list_search_room.length; i++) {
                    if (this.list_search_room[i].fullName.indexOf(event.target.value) > -1 || this.list_search_room[i].fullName.match(/\b\w/g).join('').indexOf(event.target.value) > -1) {
                        this.list_data.push(this.list_search_room[i]);
                        // console.log(this.list_data);
                    }
                    // console.log(this.list_search_room);
                }
                // Còn không gán giá trị về mảng ban đầu và tắt ô tìm kiếm
            }
            else {
                this.list_data = this.list_search_room;
            }
        }
    };
    PatientsListComponent.prototype.loadList = function () {
        var _this = this;
        this.dataService.listAll(this.obj_search).subscribe(function (data) {
            _this.list_data = data.data;
            _this.list_search_room = data.data;
        });
    };
    PatientsListComponent.prototype.addData = function () {
        this.route.navigate(["/store/patients/edit", "new"]);
    };
    PatientsListComponent.prototype.editData = function (item) {
        this.route.navigate(["/store/patients/edit", item.id]);
    };
    PatientsListComponent.prototype.cancelSave = function () {
        this.state_type = "new";
        this.obj_search = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Exam */]();
        this.obj_edit = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Exam */]();
        this.form1.resetForm();
        this.loadList();
    };
    PatientsListComponent.prototype.deleteRow = function (item) {
        this.obj_remove = item;
        this.confirmdeletemodal.open();
        // console.log('hii');
    };
    PatientsListComponent.prototype.removeOK = function () {
        var _this = this;
        this.dataService.delete(this.obj_remove).subscribe(function (data) {
            _this.toastOptions.msg = "Xóa dữ liệu thành công!";
            _this.toastyService.success(_this.toastOptions);
            _this.obj_remove = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Exam */]();
            _this.loadList();
        }, function (error) {
            _this.toastOptions.msg = "Xóa dữ liệu không thành công!";
            _this.toastyService.success(_this.toastOptions);
            _this.obj_remove = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Exam */]();
            _this.loadList();
        });
        this.confirmdeletemodal.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("modalForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["NgForm"])
    ], PatientsListComponent.prototype, "form1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("confirmdeletemodal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__["a" /* BsModalComponent */])
    ], PatientsListComponent.prototype, "confirmdeletemodal", void 0);
    PatientsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-patients-list",
            template: __webpack_require__(801)
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_3__services__["g" /* ExamService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["c" /* ToastyService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["Router"]])
    ], PatientsListComponent);
    return PatientsListComponent;
}());



/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"main-content\" style=\"margin-top:30px;\">\r\n  <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n          <div class=\"card card-stats\">\r\n              <div class=\"card-header\" data-background-color=\"red\">\r\n                  <i class=\"material-icons\">equalizer</i>\r\n              </div>\r\n              <div class=\"card-content\" style=\"padding: 0;\">\r\n                  <div class=\"form-group\">\r\n                      <!-- <input style=\"width: 30%; margin-left: 70%;\" placeholder=\"Tìm kiếm...\" type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"obj_search.code\"\r\n                          (ngModelChange)=\"search()\"> -->\r\n                          <input style=\"width: 30%; margin-left: 70%;\" placeholder=\"Tìm kiếm...\" type=\"text\" class=\"form-control\" name=\"search\"\r\n                            (input)= \"showSearchListRoom($event)\" >\r\n                  </div>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                  <div class=\"row\" style=\"padding: 0px 25px;\">\r\n                      <button class=\"btn btn-sm btn-primary\" (click)=\"addData()\">\r\n                          <i class=\"material-icons\">add</i>\r\n                      </button>\r\n                  </div>\r\n                  <ngx-datatable class=\"material\" [rows]=\"list_data\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"40\" [rowHeight]=\"40\"\r\n                      [limit]=\"5\" style=\"width:100%\">\r\n                      <ngx-datatable-column name=\"STT\" sortable=\"true\" [width]=\"60\">\r\n                          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                              {{column.name}}\r\n                          </ng-template>\r\n                          <ng-template let-row=\"row\" let-value=\"value\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\r\n                              {{rowIndex + 1}}\r\n                          </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Mã bệnh nhân\" sortable=\"true\" prop=\"code\" >\r\n                          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                              {{column.name}}\r\n                          </ng-template>\r\n                          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                              {{value}}\r\n                          </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Tên bệnh nhân\" sortable=\"true\" prop=\"fullName\">\r\n                          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                              <b>{{column.name}}</b>\r\n                          </ng-template>\r\n                          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                              {{value}}\r\n                          </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Công việc\" sortable=\"true\" prop=\"roomName\">\r\n                          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                              {{column.name}}\r\n                          </ng-template>\r\n                          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                              {{value}}\r\n                          </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Thời gian tiếp nhận\" sortable=\"true\" prop=\"dayOfExamination\">\r\n                          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                              {{column.name}}\r\n                          </ng-template>\r\n                          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                              {{value | date:'dd/MM/yyyy HH:mm'}}\r\n                          </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Trạng thái\" sortable=\"true\" prop=\"status\">\r\n                          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                              {{column.name}}\r\n                          </ng-template>\r\n                          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                              <span *ngIf=\"value === 0\" style=\"padding: 6px 10px; background: #1d2cff;color:white;border-radius: 15px;\">Chờ thanh toán</span>\r\n                              <span *ngIf=\"value === 1\" style=\"padding: 6px 10px; background: #c34438;color:white;border-radius: 15px;\">Chờ khám</span>\r\n                              <span *ngIf=\"value === 2\" style=\"padding: 6px 10px; background: #f5a623;color:white;border-radius: 15px;\">Đang khám</span>\r\n                              <span *ngIf=\"value === 3\" style=\"padding: 6px 10px; background: #3182b7;color:white;border-radius: 15px;\">Đã khám</span>\r\n                          </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Hành động\" sortable=\"true\" prop=\"id\" [width]=\"120\">\r\n                          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                              {{column.name}}\r\n                          </ng-template>\r\n                          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                              <span style=\"color:rgb(107, 107, 107);font-size: 14px;\">\r\n                                  <i class=\"material-icons md-18\" style=\"margin-right: 10px;\" (click)=\"editData(row)\">create</i>\r\n                                  <i class=\"material-icons md-18\" (click)=\"deleteRow(row)\">clear</i>\r\n                              </span>\r\n                          </ng-template>\r\n                      </ngx-datatable-column>\r\n                  </ngx-datatable>\r\n\r\n                  <!-- Modal Confirm Delete -->\r\n                  <bs-modal #confirmdeletemodal [backdrop]=\"'static'\" [keyboard]=\"false\">\r\n                      <bs-modal-body>\r\n                          <div class=\"container\" style=\"padding: 10px 25px;width:100%;\">\r\n                              Xác nhận xóa\r\n                          </div>\r\n                      </bs-modal-body>\r\n                      <bs-modal-footer>\r\n                          <div style=\"padding-right:40px;\">\r\n                              <button type=\"button\" class=\"btn btn-default-2\" (click)=\"confirmdeletemodal.close()\" style=\"margin-bottom:0;margin-right:10px;\">Hủy bỏ</button>\r\n                              <button type=\"button\" (click)=\"removeOK()\" class=\"btn btn-primary\">\r\n                                  Đồng ý </button>\r\n                          </div>\r\n                      </bs-modal-footer>\r\n                  </bs-modal>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientsEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_index__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var PatientsEditComponent = /** @class */ (function () {
    function PatientsEditComponent(route, activeRoute, dataService, feeService, roomService, _document, toastyService, toastyConfig) {
        this.route = route;
        this.activeRoute = activeRoute;
        this.dataService = dataService;
        this.feeService = feeService;
        this.roomService = roomService;
        this._document = _document;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__models_index__["c" /* Exam */]();
        this.list_city = [];
        this.list_district = [];
        this.list_ward = [];
        this.list_gender = [];
        this.list_fee = [];
        this.list_room = [];
        // Toast Option
        this.toastOptions = {
            title: '',
            msg: '',
            showClose: true,
            timeout: 5000,
            theme: 'material'
        };
        this._document.title = 'Tiếp đón bệnh nhân';
        this.toastyConfig.theme = 'material';
    }
    PatientsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activeRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id !== 'new') {
                var model_search = new __WEBPACK_IMPORTED_MODULE_1__models_index__["c" /* Exam */]();
                model_search.id = +_this.id;
                _this.dataService.get(model_search).subscribe(function (data) {
                    // data.dayOfExamination = Date.parse(data.dayOfExamination);
                    // format ngay
                    var today = new Date(data.dayOfExamination).toJSON().slice(0, 10).toLocaleString();
                    console.log(today);
                    data.dayOfExamination = today;
                    _this.model = data;
                });
            }
        });
    };
    PatientsEditComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            if ($(".selectpicker").length != 0) {
                console.log($(".selectpicker"));
                $(".selectpicker").selectpicker();
            }
        }, 1000);
        this.loadListCombo();
    };
    PatientsEditComponent.prototype.saveData = function () {
        var _this = this;
        this.dataService.insert(this.model).subscribe(function (data) {
            _this.route.navigate(['/store/patients/list']);
            _this.toastOptions.msg = 'Tiếp nhân bệnh nhân thành công!';
            _this.toastyService.success(_this.toastOptions);
        }, function (error) {
            _this.toastOptions.msg = 'Tiếp nhân bệnh nhân không thành công!';
            _this.toastyService.error(_this.toastOptions);
        });
    };
    PatientsEditComponent.prototype.updateData = function () {
        var _this = this;
        this.dataService.update(this.model).subscribe(function (data) {
            _this.route.navigate(['/store/patients/list']);
            _this.toastOptions.msg = 'Tiếp nhân bệnh nhân thành công!';
            _this.toastyService.success(_this.toastOptions);
        }, function (error) {
            _this.route.navigate(['/store/patients/list']);
            _this.toastOptions.msg = 'Tiếp nhân bệnh nhân không thành công!';
            _this.toastyService.error(_this.toastOptions);
        });
    };
    PatientsEditComponent.prototype.cancelSave = function () {
        this.route.navigate(['/store/patients/list']);
    };
    PatientsEditComponent.prototype.loadListCombo = function () {
        var _this = this;
        this.list_gender = [{
                id: 1,
                name: 'Nam'
            }, {
                id: 2,
                name: 'Nữ'
            }, {
                id: 3,
                name: 'Không xác định'
            }];
        this.list_city = [{
                id: 1,
                name: 'Hà Nội'
            }, {
                id: 2,
                name: 'Hồ Chí Minh'
            }];
        this.list_district = [{
                id: 1,
                name: 'Hoàn Kiếm'
            }, {
                id: 2,
                name: 'Hai Bà Trưng'
            }];
        this.list_ward = [{
                id: 1,
                name: 'Hàng Bài'
            }, {
                id: 2,
                name: 'Hàng Mã'
            }];
        this.roomService.list(new __WEBPACK_IMPORTED_MODULE_1__models_index__["o" /* Room */]()).subscribe(function (data) {
            _this.list_room = data.data;
        });
        this.feeService.list(new __WEBPACK_IMPORTED_MODULE_1__models_index__["d" /* Fee */]()).subscribe(function (data) {
            _this.list_fee = data.data;
        });
    };
    PatientsEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PatientsEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-patients-edit',
            template: __webpack_require__(803)
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["DOCUMENT"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* ExamService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["h" /* FeeService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["q" /* RoomService */], Object, __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["c" /* ToastyService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["a" /* ToastyConfig */]])
    ], PatientsEditComponent);
    return PatientsEditComponent;
}());



/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" style=\"margin-top:30px;\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"card card-stats\">\r\n                <div class=\"card-header\" data-background-color=\"blue\" style=\"background: #3396da !important;\">\r\n                    <i class=\"material-icons\">accessibility</i>\r\n                </div>\r\n                <div class=\"card-content\" style=\"padding: 5px 0 !important;text-align:left !important;font-size: 18px;font-weight: 500;\">\r\n                    <div class=\"form-group\">\r\n                        <span>Thông tin bệnh nhân</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Tên bệnh nhân</label>\r\n                                <input class=\"form-control\" maxlength=\"15\" [(ngModel)]=\"model.fullName\" name=\"fullName\" required #fullName=\"ngModel\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Giới tính</label>\r\n                                <select class=\"browser-default form-control\" [(ngModel)]=\"model.gender\" name=\"gender\" required #gender=\"ngModel\">\r\n                                    <option [ngValue]=\"item.id\" *ngFor=\"let item of list_gender\">{{item.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Ngày sinh</label>\r\n                                <input class=\"form-control\" type=\"number\" [(ngModel)]=\"model.birthYear\" name=\"birthYear\" required #birthYear=\"ngModel\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Số điện thoại</label>\r\n                                <input class=\"form-control\" maxlength=\"15\" [(ngModel)]=\"model.phone\" name=\"phone\" required #phone=\"ngModel\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Thành phố</label>\r\n                                <select class=\"browser-default form-control\" [(ngModel)]=\"model.city\" name=\"city\" required #city=\"ngModel\">\r\n                                    <option [ngValue]=\"item.id\" *ngFor=\"let item of list_city\">{{item.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Quận/huyện</label>\r\n                                <select class=\"browser-default form-control\" [(ngModel)]=\"model.district\" name=\"district\" required #district=\"ngModel\">\r\n                                    <option [ngValue]=\"item.id\" *ngFor=\"let item of list_district\">{{item.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Phường/xã</label>\r\n                                <select class=\"browser-default form-control\" [(ngModel)]=\"model.ward\" name=\"ward\" required #ward=\"ngModel\">\r\n                                    <option [ngValue]=\"item.id\" *ngFor=\"let item of list_ward\">{{item.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Địa chỉ</label>\r\n                                <input class=\"form-control\" maxlength=\"200\" [(ngModel)]=\"model.address\" name=\"address\" required #address=\"ngModel\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"card card-stats\">\r\n                <div class=\"card-header\" data-background-color=\"blue\" style=\"background: #e84c3d !important;\">\r\n                    <i class=\"material-icons\">add_box</i>\r\n                </div>\r\n                <div class=\"card-content\" style=\"padding: 5px 0 !important;text-align:left !important;font-size: 18px;font-weight: 500;\">\r\n                    <div class=\"form-group\">\r\n                        <span>Thông tin đợt khám</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Ngày khám</label>\r\n                                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"model.dayOfExamination\" name=\"dayOfExamination\" required #dayOfExamination=\"ngModel\"\r\n                                />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Lý do khám</label>\r\n                                <input class=\"form-control\" [(ngModel)]=\"model.reason\" name=\"Reason\" required #Reason=\"ngModel\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Dịch vụ khám</label>\r\n                                <select class=\"browser-default form-control\" [(ngModel)]=\"model.feeId\" name=\"feeId\" required #feeId=\"ngModel\">\r\n                                    <option [ngValue]=\"item.id\" *ngFor=\"let item of list_fee\">{{item.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Chỉ định Công việc</label>\r\n                                <select class=\"browser-default form-control\" [(ngModel)]=\"model.roomId\" name=\"roomId\" required #roomId=\"ngModel\">\r\n                                    <option [ngValue]=\"item.id\" *ngFor=\"let item of list_room\">{{item.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"card card-stats\">\r\n                <div class=\"card-header\" data-background-color=\"blue\" style=\"background: #3396da !important;\">\r\n                    <i class=\"material-icons\">assignment_ind</i>\r\n                </div>\r\n                <div class=\"card-content\" style=\"padding: 5px 0 !important;text-align:left !important;font-size: 18px;font-weight: 500;\">\r\n                    <div class=\"form-group\">\r\n                        <span>Thông tin thẻ BHTT</span>\r\n                        <div class=\"checkbox\" style=\"position: absolute;top: -10px;left: 350px;\">\r\n                            <label>\r\n                                <input [(ngModel)]=\"model.bhyt_date\" type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                <b style=\"color:black;\">Có thẻ BHYT</b>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer row\" *ngIf=\"model.bhyt_date\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Số thẻ BHYT</label>\r\n                                <input class=\"form-control\" [(ngModel)]=\"model.insCode\" name=\"insCode\" #insCode=\"ngModel\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Ngày hiệu lực</label>\r\n                                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"model.insStartDate\" name=\"insStartDate\" #insStartDate=\"ngModel\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Ngày hết hiệu lực</label>\r\n                                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"model.insEndDate\" name=\"insEndDate\" #insEndDate=\"ngModel\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Ngày nộp thẻ</label>\r\n                                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"model.insInputCard\" name=\"insInputCard\" #insInputCard=\"ngModel\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                                <label class=\"control-label\">Nơi khám chữa bệnh ban đầu</label>\r\n                                <select class=\"browser-default form-control\" [(ngModel)]=\"model.hospitalRegis\" name=\"hospitalRegis\" #hospitalRegis=\"ngModel\">\r\n                                    <option [ngValue]=\"item.id\" *ngFor=\"let item of list_city\">{{item.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"card card-stats\">\r\n                <div class=\"card-header\" data-background-color=\"blue\" style=\"background: #e84c3d !important;\">\r\n                    <i class=\"material-icons\">create</i>\r\n                </div>\r\n                <div class=\"card-content\" style=\"padding: 5px 0 !important;text-align:left !important;font-size: 18px;font-weight: 500;\">\r\n                    <div class=\"form-group\">\r\n                        <span>Thông tin phụ</span>\r\n                        <div class=\"checkbox\" style=\"position: absolute;top: -10px;left: 350px;\">\r\n                            <label>\r\n                                <input [(ngModel)]=\"model.extent_info\" type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                <b style=\"color:black;\">Ẩn thông tin phụ</b>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer row\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"text-align:right;\">\r\n            <button class=\"btn btn-info\" style=\"margin-right: 15px;\" (click)=\"saveData()\">THÊM</button>\r\n            <button class=\"btn btn-info\" style=\"margin-right: 15px;\" (click)=\"updateData()\">SỬA</button>\r\n            <button class=\"btn btn-default\" (click)=\"cancelSave()\">HỦY BỎ</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<style>\r\n    .browser-default {\r\n        background-color: transparent;\r\n        width: 100%;\r\n        padding: 4px 0;\r\n        font-size: 14px;\r\n        color: black;\r\n        border: none;\r\n    }\r\n\r\n    select:focus {\r\n        outline: none\r\n    }\r\n</style>\r\n";

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(753);

var PatientsRoutes = [
    {
        path: 'patients',
        children: [{
                path: 'list',
                component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* PatientsListComponent */]
            }, {
                path: 'edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* PatientsEditComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=4.js.map