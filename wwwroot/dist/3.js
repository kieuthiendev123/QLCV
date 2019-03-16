webpackJsonp([3],{

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorModule", function() { return DoctorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bs3_modal__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__doctor_routing__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services__ = __webpack_require__(681);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DoctorModule = /** @class */ (function () {
    function DoctorModule() {
    }
    DoctorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_8__doctor_routing__["a" /* DoctorRoutes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_bs3_modal__["b" /* BsModalModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__index__["b" /* DoctorListComponent */], __WEBPACK_IMPORTED_MODULE_7__index__["a" /* DoctorExaminationComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services__["f" /* DoctorService */]]
        })
    ], DoctorModule);
    return DoctorModule;
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

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_list_component__ = __webpack_require__(805);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__list_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__examination_examination_component__ = __webpack_require__(807);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__examination_examination_component__["a"]; });




/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__(681);
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









var DoctorListComponent = /** @class */ (function () {
    function DoctorListComponent(_document, toastyService, route, dataService) {
        this._document = _document;
        this.toastyService = toastyService;
        this.route = route;
        this.dataService = dataService;
        this.state_type = 'new';
        this.list_data = [];
        // Toast Option
        this.toastOptions = {
            title: '',
            msg: '',
            showClose: true,
            timeout: 5000,
            theme: 'default'
        };
        this._document.title = 'Danh sách chờ khám';
    }
    DoctorListComponent.prototype.ngOnInit = function () {
        this.obj_remove = new __WEBPACK_IMPORTED_MODULE_2__models__["g" /* Patients */]();
        this.obj_edit = new __WEBPACK_IMPORTED_MODULE_2__models__["g" /* Patients */]();
        this.obj_search = new __WEBPACK_IMPORTED_MODULE_2__models__["g" /* Patients */]();
        this.loadList();
    };
    DoctorListComponent.prototype.ngAfterViewInit = function () {
    };
    DoctorListComponent.prototype.search = function () {
        this.loadList();
    };
    DoctorListComponent.prototype.loadList = function () {
        var _this = this;
        this.dataService.listPatients().subscribe(function (data) {
            _this.list_data = data.data;
        });
    };
    DoctorListComponent.prototype.editData = function (item) {
        this.route.navigate(['/store/patients/edit', item.id]);
    };
    DoctorListComponent.prototype.cancelSave = function () {
        this.state_type = 'new';
        this.obj_search = new __WEBPACK_IMPORTED_MODULE_2__models__["g" /* Patients */]();
        this.obj_edit = new __WEBPACK_IMPORTED_MODULE_2__models__["g" /* Patients */]();
        this.form1.resetForm();
        this.loadList();
    };
    DoctorListComponent.prototype.deleteRow = function (item) {
        this.obj_remove = item;
        this.confirmdeletemodal.open();
    };
    DoctorListComponent.prototype.removeOK = function () {
        this.toastOptions.msg = 'Xóa dữ liệu thành công!';
        this.toastyService.success(this.toastOptions);
    };
    DoctorListComponent.prototype.callKham = function (item) {
        var _this = this;
        this.dataService.callKham(item.id).subscribe(function (data) {
            _this.route.navigate(['/store/doctor/examination', item.id]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["NgForm"])
    ], DoctorListComponent.prototype, "form1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('confirmdeletemodal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__["a" /* BsModalComponent */])
    ], DoctorListComponent.prototype, "confirmdeletemodal", void 0);
    DoctorListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-doctor-list',
            template: __webpack_require__(806)
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_7__services__["f" /* DoctorService */]])
    ], DoctorListComponent);
    return DoctorListComponent;
}());



/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"main-content\" style=\"margin-top:30px;\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"card card-stats\">\r\n                <div class=\"card-header\" data-background-color=\"red\">\r\n                    <i class=\"material-icons\">equalizer</i>\r\n                </div>\r\n                <div class=\"card-content\" style=\"padding: 0;\">\r\n                    <div class=\"form-group\">\r\n                        <input style=\"width: 30%; margin-left: 70%;\" placeholder=\"Tìm kiếm...\" type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"obj_search.name\"\r\n                            (ngModelChange)=\"search()\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <ngx-datatable class=\"material\" [rows]=\"list_data\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"40\" [rowHeight]=\"40\"\r\n                        [limit]=\"5\" style=\"width:100%\">\r\n                        <ngx-datatable-column name=\"STT khám\" sortable=\"true\" [width]=\"80\" prop=\"number\">\r\n                          <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                              {{column.name}}\r\n                          </ng-template>\r\n                          <ng-template let-row=\"row\" let-value=\"value\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\r\n                              {{value}}\r\n                          </ng-template>\r\n                      </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Mã bệnh nhân\" sortable=\"true\" prop=\"code\">\r\n                            <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                                {{column.name}}\r\n                            </ng-template>\r\n                            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                {{value}}\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Tên bệnh nhân\" sortable=\"true\" prop=\"fullName\">\r\n                            <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                                <b>{{column.name}}</b>\r\n                            </ng-template>\r\n                            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                {{value}}\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Ngày khám\" sortable=\"true\" prop=\"dayOfExamination\">\r\n                            <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                                {{column.name}}\r\n                            </ng-template>\r\n                            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                {{value | date:'dd/MM/yyyy'}}\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Trạng thái\" sortable=\"true\" prop=\"status\">\r\n                            <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                                {{column.name}}\r\n                            </ng-template>\r\n                            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                <span *ngIf=\"value === 1\" style=\"padding: 6px 10px; background: #c34438;color:white;border-radius: 15px;\">Chờ khám</span>\r\n                                <span *ngIf=\"value === 2\" style=\"padding: 6px 10px; background: #f5a623;color:white;border-radius: 15px;\">Đang khám</span>\r\n                                <span *ngIf=\"value === 3\" style=\"padding: 6px 10px; background: #3182b7;color:white;border-radius: 15px;\">Đã khám</span>\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Hành động\" sortable=\"true\" prop=\"id\">\r\n                            <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                                {{column.name}}\r\n                            </ng-template>\r\n                            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                <span class=\"goi-kham\" *ngIf=\"row.status !== 3\" style=\"padding: 6px 10px;color:white; background: #c34438;\" (click)=\"callKham(row)\">Gọi khám</span>\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                        <style>\r\n                            .goi-kham:hover{\r\n                                background: #c71c0d !important;\r\n                            }\r\n                        </style>\r\n                    </ngx-datatable>\r\n\r\n                    <!-- Modal Confirm Delete -->\r\n                    <bs-modal #confirmdeletemodal [backdrop]=\"'static'\" [keyboard]=\"false\">\r\n                        <bs-modal-body>\r\n                            <div class=\"container\" style=\"padding: 10px 25px;width:100%;\">\r\n                                Xác nhận xóa\r\n                            </div>\r\n                        </bs-modal-body>\r\n                        <bs-modal-footer>\r\n                            <div style=\"padding-right:40px;\">\r\n                                <button type=\"button\" class=\"btn btn-default-2\" (click)=\"confirmdeletemodal.close()\" style=\"margin-bottom:0;margin-right:10px;\">Hủy bỏ</button>\r\n                                <button type=\"button\" (click)=\"removeOK()\" class=\"btn btn-primary\">\r\n                                    Đồng ý </button>\r\n                            </div>\r\n                        </bs-modal-footer>\r\n                    </bs-modal>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorExaminationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DoctorExaminationComponent = /** @class */ (function () {
    function DoctorExaminationComponent() {
        this.step = 4;
        this.step1 = 0;
        this.step4 = 1;
        this.step_thuoc = 0;
        this.list_cls = [];
        this.list_cls_push = [];
        this.arry_don_thuoc_co_san = [];
        this.arry_thuoc_co_san = [];
        this.list_ds_thuoc = [];
        this.Arraydv = [];
        this.state_type = "";
    }
    DoctorExaminationComponent.prototype.ngOnInit = function () {
        this.list_cls = [
            { id: 1, name: "Bệnh lý thần linh tự trị" },
            { id: 2, name: "Đau nhức đầu đột ngột dữ dội" },
            { id: 3, name: "U nguyên bào thần kinh" },
            { id: 4, name: "Viêm túy ngang" },
            { id: 5, name: "Đột quỵ (Stroke)" },
            { id: 6, name: "Đau nhức đầu do viêm xoang" },
            { id: 7, name: "Bệnh động kinh" }
        ];
        // console.log(this.list_cls);
        this.arry_don_thuoc_co_san = [
            { id: 1, name: "Đơn cúm thường" },
            { id: 2, name: "Đơn cúm gà" },
            { id: 3, name: "Đơn cúm H5N1" },
            { id: 4, name: "Đơn cúm nặng" },
        ];
        this.arry_thuoc_co_san = [
            { id: 1, name: "Penicillin A 250mg" },
            { id: 2, name: "Penicillin A 500mg" },
            { id: 3, name: "Penicillin G" },
            { id: 4, name: "Penicillin E" }
        ];
        this.list_ds_thuoc = [
            { id: 1, name: 'Penicillin G', sl: '2 Hộp', dv: 'Hộp', ddg: 'Viên', ll: '1 viên/lần', ts: '2 lần/ngày', tg: '10 ngày' },
            { id: 2, name: 'Chloxacillin 500mg', sl: '1 Vỉ', dv: 'Vỉ', ddg: 'Siro', ll: '2 viên/lần', ts: '2 lần/ngày', tg: '30 ngày' },
            { id: 3, name: 'Chlorotetracycline 250mg', sl: '2 Lọ', dv: 'Lọ', ddg: 'Gói', ll: '1 gói/lần', ts: '2 lần/ngày', tg: '30 ngày' }
        ];
        this.Arraydv = [{
                id: 1,
                name: 'Hộp'
            }, {
                id: 2,
                name: 'Vỉ'
            }, {
                id: 3,
                name: 'Lọ'
            }];
        this.obj_edit = [];
    };
    ;
    DoctorExaminationComponent.prototype.ngAfterViewInit = function () {
    };
    DoctorExaminationComponent.prototype.changeStep = function (step) {
        this.step = step;
    };
    DoctorExaminationComponent.prototype.changeStep1 = function (step1) {
        this.step1 = step1;
        // console.log(this.step1);
    };
    DoctorExaminationComponent.prototype.changeStep4 = function (step4) {
        this.step4 = step4;
        // console.log(this.step4);
    };
    DoctorExaminationComponent.prototype.changeStepTimThuoc = function (step_thuoc) {
        this.step_thuoc = step_thuoc;
        // console.log(this.step4);
    };
    // click
    DoctorExaminationComponent.prototype.eventClick01 = function (item) {
        this.list_cls_push.push(item);
        console.log(this.list_cls_push);
    };
    DoctorExaminationComponent.prototype.addData = function () {
        this.state_type = 'new';
        // this.obj_edit = new Welfare();
        this.modal.open();
        console.log('hi');
        // this.form1.resetForm();
    };
    DoctorExaminationComponent.prototype.ke_don = function (row) {
        this.kedonchitiet.open();
        this.obj_edit = row;
        console.log(row);
    };
    DoctorExaminationComponent.prototype.huy_ke_don = function () {
        this.kedonForm.resetForm();
        this.kedonchitiet.dismiss();
    };
    DoctorExaminationComponent.prototype.cancelSave = function () {
        this.state_type = 'new';
        // this.obj_search = new Welfare();
        // this.obj_edit = new Welfare();
        this.form1.resetForm();
        this.modal.dismiss();
        // this.loadList();
    };
    DoctorExaminationComponent.prototype.deleteRow1 = function () {
        this.confirmdeletemodal.open();
    };
    DoctorExaminationComponent.prototype.deleteRow = function (item) {
        this.list_cls_push;
        var index = this.list_cls_push.indexOf(item);
        console.log(index);
        if (index > -1) {
            this.list_cls_push.splice(index, 1);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"])
    ], DoctorExaminationComponent.prototype, "form1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modal1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__["a" /* BsModalComponent */])
    ], DoctorExaminationComponent.prototype, "modal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('confirmdeletemodal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__["a" /* BsModalComponent */])
    ], DoctorExaminationComponent.prototype, "confirmdeletemodal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('kedonchitiet'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal__["a" /* BsModalComponent */])
    ], DoctorExaminationComponent.prototype, "kedonchitiet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('kedonForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"])
    ], DoctorExaminationComponent.prototype, "kedonForm", void 0);
    DoctorExaminationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-doctor-examination',
            template: __webpack_require__(808),
            styles: [__webpack_require__(809)]
        }),
        __metadata("design:paramtypes", [])
    ], DoctorExaminationComponent);
    return DoctorExaminationComponent;
}());



/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content page-doctor-exam\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row row-header\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"col-sm-3\">\r\n          <h4 *ngIf=\"step===0\" style=\"margin-top:0;\">\r\n            <b>BỆNH ÁN TỔNG HỢP</b>\r\n          </h4>\r\n          <a *ngIf=\"step > 0\" (click)=\"step=0\">\r\n            <i class=\"material-icons\">navigate_before</i> Bệnh án\r\n          </a>\r\n        </div>\r\n        <div class=\"col-sm-2\" style=\"padding: 0\" (click)=\"changeStep(1)\">\r\n          <span class=\"step-number \" [ngClass]=\"{'active': step === 1}\">1</span>\r\n          <span class=\"step-name\" [ngClass]=\"{'active': step === 1}\">KHÁM BỆNH</span>\r\n        </div>\r\n        <div class=\"col-sm-2\" style=\"padding: 0\" (click)=\"changeStep(2)\">\r\n          <span class=\"step-number\" [ngClass]=\"{'active': step === 2}\">2</span>\r\n          <span class=\"step-name\" [ngClass]=\"{'active': step === 2}\">CẬN LÂM SÀNG</span>\r\n        </div>\r\n        <div class=\"col-sm-2\" style=\"padding: 0\" (click)=\"changeStep(3)\">\r\n          <span class=\"step-number\" [ngClass]=\"{'active': step === 3}\">3</span>\r\n          <span class=\"step-name\" [ngClass]=\"{'active': step === 3}\">CHUẨN ĐOÁN</span>\r\n        </div>\r\n        <div class=\"col-sm-2\" style=\"padding: 0\" (click)=\"changeStep(4)\">\r\n          <span class=\"step-number\" [ngClass]=\"{'active': step === 4}\">4</span>\r\n          <span class=\"step-name\" [ngClass]=\"{'active': step === 4}\">ĐIỀU TRỊ</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row main\" *ngIf=\"step === 0 || step === 1 || step === 2\">\r\n      <!-- Bệnh án -->\r\n      <div *ngIf=\"step===0\">\r\n        <h4 style=\"padding: 0 15px;\">\r\n          <b>Thông tin bệnh nhân</b>\r\n        </h4>\r\n        <div class=\"col-sm-12\" style=\"padding-bottom:15px;border-bottom: 1px solid #cecece;\">\r\n          <div class=\"col-sm-2\" style=\"padding: 0 3px;\">\r\n            <div class=\"form-group\">\r\n              <label class=\"label-control\">Mã bệnh nhân</label>\r\n              <p>DC1009</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\" style=\"padding: 0 3px;\">\r\n            <div class=\"form-group\">\r\n              <label class=\"label-control\">Họ tên</label>\r\n              <p>Nguyễn Văn A</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-1\" style=\"padding: 0 3px;\">\r\n            <div class=\"form-group\">\r\n              <label class=\"label-control\">Tuổi</label>\r\n              <p>23</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\" style=\"padding: 0 3px;\">\r\n            <div class=\"form-group\">\r\n              <label class=\"label-control\">Giới tính</label>\r\n              <p>Nam</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-3\" style=\"padding: 0 3px;\">\r\n            <div class=\"form-group\">\r\n              <label class=\"label-control\">Ngày vào viện</label>\r\n              <p>01/11/2017 (23 ngày)</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\" style=\"padding: 0 3px;\">\r\n            <div class=\"form-group\">\r\n              <label class=\"label-control\">Địa chỉ</label>\r\n              <p>Gia Lộc, Hải Dương</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\" style=\"padding: 15px;\">\r\n          <div class=\"col-sm-3 title-step-1\">\r\n            <b>Hỏi bệnh</b>\r\n          </div>\r\n          <div class=\"col-sm-9 text-right\">\r\n            <i class=\"material-icons\" style=\"color: #cecece;margin-right: 10px;\">create</i>\r\n            <i class=\"material-icons\" style=\"color: #cecece;\">clear</i>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 title-step-1\">\r\n          <div class=\"col-sm-2\">\r\n            <b>Lý do khám</b>\r\n          </div>\r\n          <div class=\"col-sm-10\" style=\"padding:0\">Sốt, mệt mỏi, vàng da, vàng mắt</div>\r\n        </div>\r\n        <div class=\"col-sm-12 title-step-1\">\r\n          <div class=\"col-sm-2\">\r\n            <b>Bệnh sử</b>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"col-sm-12\">\r\n            <p>Ngày mùng 7 sau khi đi tập luyện về bệnh nhân thấy mệt mỏi, ăn ngủ kém, khó chịu, sau đó thấy sốt nhẹ, không\r\n              rét run, sốt liên tục trong vòng 3-4 ngày, đến ngày thứ 5 bệnh nhân thấy vàng mắt, vàng da, đi tiểu ít hơn\r\n              so với ngày thường, nước tiểu sẫm màu kèm mệt mỏi tăng lên.\r\n            </p>\r\n            <p>Bệnh nhân còn thấy đau tức ở vùng hạ sườn phải, khó tiêu, sợ mỡ, đi tiêu phân lỏng. Bệnh nhân đã điều trị tại\r\n              tuyến dưới 4 ngày, được truyền dịch thấy không đỡ nên sau đó được chuyển về A5/103 trong tình trạng tỉnh táo,\r\n              da niêm mạc vàng, khám có gan to 2cm dưới bờ sườn, mật độ mềm, bờ nhẵn. Bác sĩ điều trị chẩn đoán bệnh nhân\r\n              bị viêm gan virus B cấp. Bệnh nhân sau đó được điều trị bằng glucose 30% uống, vitamin nhóm B, C và nghỉ ngơi\r\n              tại giường. </p>\r\n            <p>Sau hai tuần điều trị, triệu chứng giảm dần, ngày thứ 15 của bệnh thì nước tiểu bệnh nhân trong như bình thường,\r\n              tiểu nhiều hơn. Hiện tại hết sốt, hết mệt, ăn ngủ tốt, còn đau tức nhẹ hạ sườn phải.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 title-step-1\">\r\n          <div class=\"col-sm-2\">\r\n            <b>Tiền sử</b>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"col-sm-12\">\r\n            <p>\r\n              Bản thân: Bình thường, không bị vàng da vàng mắt. Không dị ứng thuốc. Không uống rượu bia hay hút thuốc lá.\r\n            </p>\r\n            <p>\r\n              Gia đình: Không ai mắc bệnh liên quan.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 title-step-1\">\r\n          <div class=\"col-sm-2\">\r\n            <b>Khám bệnh</b>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 title-step-1\">\r\n          <div class=\"col-sm-2\">\r\n            <b>Toàn thân:</b>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"col-sm-12\">\r\n            <p>\r\n              Bệnh nhân tỉnh, tiếp xúc tốt. Thể trạng trung bình, không sốt. Da niêm mạc không vàng. Hạch ngoại vi không sưng, tuyến giáp\r\n              không lớn. Không phù, không xuất huyết dưới da.\r\n            </p>\r\n            <p>\r\n              <span style=\"margin-right: 15px;\">DHST: Mạch: 72 lần/phút</span>\r\n              <span>Nhiệt độ: 36,5 độ C</span>\r\n            </p>\r\n            <p>\r\n              <span style=\"margin-right: 15px;\">Huyết áp: 130/70 mmHg</span>\r\n              <span>Nhịp thở: 20 lần/phút</span>\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 title-step-1\">\r\n          <div class=\"col-sm-2\">\r\n            <b>Tiêu hóa</b>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"col-sm-12\">\r\n            <p>\r\n              Không đau bụng, không buồn nôn, ăn uống tốt. Đại tiện phân bình thường, phân vàng.\r\n            </p>\r\n            <p>\r\n              Bụng mềm, không chướng, di động đều theo nhịp thở, gõ trong.\r\n            </p>\r\n            <p>\r\n              Gan mấp mé bờ sườn độ 1cm, mật độ mềm, bờ tù, ấn hơi tức.\r\n            </p>\r\n            <p>\r\n              Lách không lớn.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 title-step-1\">\r\n          <div class=\"col-sm-2\">\r\n            <b>Các xét nghiệm</b>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"col-sm-12\">\r\n            <p>\r\n              * CTM: HC: 3,89 T/l; HST 144g/l\r\n            </p>\r\n            <p>\r\n              * Xét nghiệm men gan: Bệnh án viêm gan do virus B\r\n            </p>\r\n            <p>\r\n              * HBsAg (+); Anti HCV (-)\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 title-step-1\">\r\n          <div class=\"col-sm-2\">\r\n            <b>Chuẩn đoán</b>\r\n          </div>\r\n          <div class=\"col-sm-10\" style=\"padding: 0;\">\r\n            <p>Viêm gan virus B cấp thể thông thường điển hình mức độ vừa giai đoạn lui bệnh</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 title-step-1\">\r\n          <div class=\"col-sm-2\">\r\n            <b>Điều trị</b>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"col-sm-12\">\r\n            <p>\r\n              – Tiếp tục chế độ nghỉ ngơi tại giường và tránh làm công việc nặng.\r\n            </p>\r\n            <p>\r\n              – Dùng glucose đường uống + vitamin B, C\r\n            </p>\r\n            <p>\r\n              – Chế độ ăn: tăng đường, đạm, ăn nhiều hoa quả và giảm mỡ\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 title-step-1\">\r\n          <div class=\"col-sm-2\">\r\n            <b>Ảnh đính kèm</b>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"col-sm-4\">\r\n            <img style=\"width: 100%;height: 150px;\" src=\"http://benhvienthucuc.vn/wp-content/uploads/2016/09/chup-x-quang-co-anh-huong-toi-suc-khoe-khong.jpg\"\r\n            />\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <img style=\"width: 100%;height: 150px;\" src=\"http://healthplus.vn/Images/Uploaded/Share/2014/02/19/20140219X-quang.jpg\" />\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <img style=\"width: 100%;height: 150px;\" src=\"http://sohanews.sohacdn.com/zoom/640_360/2016/photo-6-1478404573221-0-0-311-500-crop-1478404788089.png\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- End Bệnh án -->\r\n\r\n      <!-- Khám bệnh -->\r\n      <div *ngIf=\"step===1\">\r\n        <div class=\"row\">\r\n          <div class=\"card card-stats\">\r\n            <div class=\"card-header\" data-background-color=\"blue\" style=\"background: #e84c3d !important;\">\r\n              <i class=\"material-icons\">accessibility</i>\r\n            </div>\r\n            <div class=\"card-content\" style=\"padding: 5px 0 !important;text-align:left !important;font-size: 18px;font-weight: 500;\">\r\n              <div class=\"form-group\">\r\n                <span>Thông tin bệnh nhân</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer row\">\r\n              <h4 style=\"padding: 0 15px;\">\r\n                <b>Thông tin bệnh nhân</b>\r\n              </h4>\r\n              <div class=\"col-sm-12\" style=\"padding-bottom:15px;border-bottom: 1px solid #cecece;\">\r\n                <div class=\"col-sm-2\" style=\"padding: 0 3px;\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"label-control\">Mã bệnh nhân</label>\r\n                    <p>DC1009</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-2\" style=\"padding: 0 3px;\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"label-control\">Họ tên</label>\r\n                    <p>Nguyễn Văn A</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"padding: 0 3px;\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"label-control\">Tuổi</label>\r\n                    <p>23</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-2\" style=\"padding: 0 3px;\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"label-control\">Giới tính</label>\r\n                    <p>Nam</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" style=\"padding: 0 3px;\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"label-control\">Ngày vào viện</label>\r\n                    <p>01/11/2017 (23 ngày)</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-2\" style=\"padding: 0 3px;\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"label-control\">Địa chỉ</label>\r\n                    <p>Gia Lộc, Hải Dương</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"card card-stats\">\r\n            <div class=\"card-header\" data-background-color=\"blue\" style=\"background: #e84c3d !important;\">\r\n              <i class=\"material-icons\">add_box</i>\r\n            </div>\r\n            <div class=\"card-content\" style=\"padding: 5px 0 !important;text-align:left !important;font-size: 18px;font-weight: 500;\">\r\n              <div class=\"form-group\">\r\n                <span>Hỏi bệnh</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer row\">\r\n              <div class=\"col-sm-12\" style=\"margin: 10px 0;\">\r\n                <div class=\"col-sm-2\">\r\n                  <b>Lý do khám</b>\r\n                </div>\r\n                <div class=\"col-sm-10\">\r\n                  <p>Sốt, mệt mỏi, vàng da, vàng mắt</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\" style=\"margin: 10px 0;\">\r\n                <div class=\"col-sm-2\">\r\n                  <b>Bệnh sử</b>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- End Khám bệnh -->\r\n\r\n      <!-- Cận lâm sàng -->\r\n      <div *ngIf=\"step===2\">\r\n        <div class=\"row\">\r\n          <div class=\"card card-stats\">\r\n            <div class=\"card-header\" data-background-color=\"blue\" style=\"background: #e84c3d !important;\">\r\n              <i class=\"material-icons\">accessibility</i>\r\n            </div>\r\n            <div class=\"card-content\" style=\"padding: 5px 0 !important;text-align:left !important;font-size: 18px;font-weight: 500;\">\r\n              <div class=\"form-group\">\r\n                <span>Chỉ định cận lâm sàng</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer row\">\r\n              <div class=\"col-sm-12\">\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                    <label class=\"control-label\">Chuẩn đoán ban đầu</label>\r\n                    <input class=\"form-control\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <ngx-datatable class=\"material\" [rows]=\"list_cls\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"40\" [rowHeight]=\"40\"\r\n                    [limit]=\"5\" style=\"width:100%\">\r\n                    <ngx-datatable-column name=\"STT\" sortable=\"true\" [width]=\"80\" prop=\"number\">\r\n                      <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        {{column.name}}\r\n                      </ng-template>\r\n                      <ng-template let-row=\"row\" let-value=\"value\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\r\n                        {{rowIndex+1}}\r\n                      </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column name=\"Cận lâm sàng đã chỉ định\" sortable=\"true\" prop=\"ClsName\">\r\n                      <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        {{column.name}}\r\n                      </ng-template>\r\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        {{value}}\r\n                      </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column name=\"Trạng thái\" sortable=\"true\" prop=\"Status\">\r\n                      <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        <b>{{column.name}}</b>\r\n                      </ng-template>\r\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        <span *ngIf=\"value === 0\" style=\"padding: 3px 5px; border-radius:8px;color:white;background:grey;\">Chưa gửi</span>\r\n                        <span *ngIf=\"value === 1\" style=\"padding: 3px 5px; border-radius:8px;color:white;background:orange;\">Chờ kết quả</span>\r\n                        <span *ngIf=\"value === 2\" style=\"padding: 3px 5px; border-radius:8px;color:white;background:green;\">Đã xong</span>\r\n                      </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column name=\"Action\" sortable=\"true\" prop=\"Id\">\r\n                      <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n\r\n                      </ng-template>\r\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        <span>\r\n                          <i class=\"fa fa-remove\" (click)=\"removeCls(value)\"></i>\r\n                        </span>\r\n                      </ng-template>\r\n                    </ngx-datatable-column>\r\n                  </ngx-datatable>\r\n\r\n                  <!-- Modal Confirm Delete -->\r\n                  <bs-modal #confirmdeletemodal [backdrop]=\"'static'\" [keyboard]=\"false\">\r\n                    <bs-modal-body>\r\n                      <div class=\"container\" style=\"padding: 10px 25px;width:100%;\">\r\n                        Xác nhận xóa\r\n                      </div>\r\n                    </bs-modal-body>\r\n                    <bs-modal-footer>\r\n                      <div style=\"padding-right:40px;\">\r\n                        <button type=\"button\" class=\"btn btn-default-2\" (click)=\"confirmdeletemodal.close()\" style=\"margin-bottom:0;margin-right:10px;\">Hủy bỏ</button>\r\n                        <button type=\"button\" (click)=\"removeOK()\" class=\"btn btn-primary\">\r\n                          Đồng ý </button>\r\n                      </div>\r\n                    </bs-modal-footer>\r\n                  </bs-modal>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end Cận lâm sàng -->\r\n    </div>\r\n\r\n    <div class=\"row main2\">\r\n      <!-- Chuẩn đoán -->\r\n      <div *ngIf=\"step===3\">\r\n        <!-- Tìm kiếm bệnh chuẩn đoán -->\r\n        <div class=\"col-md-8 col-left\">\r\n          <div class=\"left\">\r\n            <div class=\"card-content\" style=\"padding: 5px 0 !important;text-align:left !important;font-size: 18px;font-weight: 500;padding-left: 30px;\">\r\n              <div class=\"form-group\" style=\"margin-left: 30px\">\r\n                <span>Tìm kiếm bệnh chuẩn đoán</span>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\" style=\"padding-left: 45px;padding-top: 30px;\">\r\n                  <div class=\"col-md-3\" style=\"padding: 0\" (click)=\"changeStep1(0)\">\r\n                    <span class=\"step-number\" [ngClass]=\"{'active': step1 === 0}\">DANH MỤC BỆNH</span>\r\n                  </div>\r\n                  <div class=\"col-md-4\" style=\"padding: 0;width:30%\" (click)=\"changeStep1(1)\">\r\n                    <span class=\"step-number\" [ngClass]=\"{'active': step1 === 1}\">BỆNH CHỌN GẦN ĐÂY</span>\r\n                  </div>\r\n                  <div class=\"col-md-3\" style=\"padding: 0;\" (click)=\"changeStep1(2)\">\r\n                    <span class=\"step-number\" [ngClass]=\"{'active': step1 === 2}\">ICD10</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Danh mục bệnh -->\r\n              <div class=\"card-footer row\" *ngIf=\"step1===0\" style=\"padding-left: 20px;padding-right: 20px;\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                      <label class=\"control-label\">Tìm kiếm bệnh...</label>\r\n                      <input class=\"form-control\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-12\">\r\n                    <ngx-datatable class=\"material\" [rows]=\"list_cls\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"40\" [rowHeight]=\"40\"\r\n                      [limit]=\"5\" style=\"width:100%\">\r\n                      <ngx-datatable-column sortable=\"false\" prop=\"name\" name=\"Danh sách bệnh lý\">\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                          <p (click)=\"eventClick01(row)\">{{value}}</p>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                    </ngx-datatable>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- End Dành mục bệnh -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- End Tìm kiếm bệnh chuẩn đoán -->\r\n\r\n        <!-- Các bệnh chuẩn đoán -->\r\n        <div class=\"col-md-4 col-left col-right\">\r\n          <div class=\"left\">\r\n            <div class=\"card-content\" style=\"padding: 5px 0 !important;text-align:left !important;font-size: 18px;font-weight: 500;\">\r\n              <div class=\"card-content\" style=\"padding: 5px 15px !important;text-align:left !important;font-size: 18px;font-weight: 500;padding-left: 30px;\">\r\n                <ngx-datatable class=\"material\" [rows]=\"list_cls_push\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"40\" [rowHeight]=\"40\"\r\n                  [limit]=\"7\" style=\"width:100%\">\r\n                  <ngx-datatable-column sortable=\"false\" prop=\"name\" name=\"Các bệnh chuẩn đoán\">\r\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                      <p>{{value}}\r\n                        <i class=\"material-icons md-18\" (click)=\"deleteRow(row)\" style=\"float: right;color:#cecece\">clear</i>\r\n                      </p>\r\n                    </ng-template>\r\n                  </ngx-datatable-column>\r\n                </ngx-datatable>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- End Các bệnh chuẩn đoán -->\r\n      </div>\r\n      <!-- End Chuẩn đoán-->\r\n\r\n      <!-- Điều trị -->\r\n      <div *ngIf=\"step===4\" class=\"step4\">\r\n        <div class=\"row\">\r\n          <!-- step -->\r\n          <div class=\"col-md-12\" style=\"padding-left:auto;padding-top: 30px;\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-1 col-xs-4\" style=\"padding: 0\" (click)=\"changeStep4(0)\">\r\n              <div class=\"step-number\" [ngClass]=\"{'active': step4 === 0}\">\r\n                <i class=\"material-icons\">mode_edit</i>\r\n                <p>\r\n                  <b>GHI CHÚ</b>\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-1\"></div>\r\n            <div class=\"col-md-1 col-xs-4\" style=\"padding: 0;\" (click)=\"changeStep4(1)\">\r\n              <div class=\"step-number\" [ngClass]=\"{'active': step4 === 1}\">\r\n                <i class=\"material-icons\">mode_edit</i>\r\n                <p>\r\n                  <b>KÊ THUỐC</b>\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-1\"></div>\r\n            <div class=\"col-md-1 col-xs-4\" style=\"padding: 0; \" (click)=\"changeStep4(2)\">\r\n              <div class=\"step-number\" style=\"padding-left:5px;padding-right: 5px \" [ngClass]=\"{'active': step4 === 2}\">\r\n                <i class=\"material-icons\">mode_edit</i>\r\n                <p>\r\n                  <b>LÀM THỦ THUẬT</b>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- end step -->\r\n        </div>\r\n        <div class=\"row\">\r\n          <!-- Kê thuốc -->\r\n          <div *ngIf=\"step4===1\">\r\n            <div class=\"col-left\" style=\"margin:0px 15px \">\r\n              <div class=\"left\">\r\n                <div class=\"card-content\" style=\"padding: 5px 0 !important;text-align:left !important;font-size: 18px;font-weight: 500;padding-left: 30px;\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\" style=\"padding-left: 47px;padding-top: 30px;\">\r\n                      <div class=\"col-md-2\" style=\"padding: 0;text-align: center;\" (click)=\"changeStepTimThuoc(0)\">\r\n                        <span class=\"step-number\" [ngClass]=\"{'active': step_thuoc === 0}\">TÌM THUỐC</span>\r\n                      </div>\r\n                      <div class=\"col-md-3 col-xs-12\" style=\"padding: 0;\" (click)=\"changeStepTimThuoc(1)\">\r\n                        <span class=\"step-number\" [ngClass]=\"{'active': step_thuoc === 1}\">ĐƠN THUỐC CÓ SẴN</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- Tìm thuốc -->\r\n                  <div *ngIf=\"step_thuoc===0\" style=\"padding: 0px 30px\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                          <label class=\"control-label\">Tìm kiếm thuốc...</label>\r\n                          <input class=\"form-control\" />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-12\">\r\n                        <ngx-datatable class=\"material\" [rows]=\"arry_thuoc_co_san\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"40\"\r\n                          [rowHeight]=\"40\" [limit]=\"5\" style=\"width:100%\">\r\n                          <ngx-datatable-column sortable=\"true\" prop=\"name\" name=\"Danh sách thuốc có sẵn\">\r\n                            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template style=\"padding:20px 0\">\r\n                              <p (click)=\"detail_thuoc(row)\">{{value}}\r\n                                <span *ngIf=\"row.id===3\" style=\"color: red;font-size: 12px;float: right;\">Hết thuốc</span>\r\n                              </p>\r\n                            </ng-template>\r\n                          </ngx-datatable-column>\r\n                        </ngx-datatable>\r\n                      </div>\r\n\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"card card-stats\">\r\n                          <!-- Danh sách thuốc đã kê -->\r\n                          <div class=\"card-content\">\r\n                            <p style=\"float: left;font-size:13px\">Danh sách thuốc đã kê</p>\r\n                            <ngx-datatable class=\"material\" [rows]=\"list_ds_thuoc\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"40\" [rowHeight]=\"40\"\r\n                              [limit]=\"3\" style=\"width:100%\">\r\n                              <ngx-datatable-column name=\"STT\" sortable=\"true\" [width]=\"10\">\r\n                                <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                                  {{column.name}}\r\n                                </ng-template>\r\n                                <ng-template let-row=\"row\" let-value=\"value\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\r\n                                  {{rowIndex + 1}}\r\n                                </ng-template>\r\n                              </ngx-datatable-column>\r\n                              <ngx-datatable-column name=\"Tên thuốc\" sortable=\"true\" prop=\"name\">\r\n                                <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                                  {{column.name}}\r\n                                </ng-template>\r\n                                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                  {{value}}\r\n                                </ng-template>\r\n                              </ngx-datatable-column>\r\n                              <ngx-datatable-column name=\"Số lượng\" sortable=\"true\" prop=\"sl\">\r\n                                <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                                  {{column.name}}\r\n                                </ng-template>\r\n                                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                  {{value}}\r\n                                </ng-template>\r\n                              </ngx-datatable-column>\r\n                              <ngx-datatable-column name=\"Dạng đóng gói\" sortable=\"true\" prop=\"ddg\">\r\n                                <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                                  {{column.name}}\r\n                                </ng-template>\r\n                                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                  {{value}}\r\n                                </ng-template>\r\n                              </ngx-datatable-column>\r\n                              <ngx-datatable-column name=\"Liều lượng\" sortable=\"true\" prop=\"ll\">\r\n                                <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                                  {{column.name}}\r\n                                </ng-template>\r\n                                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                  {{value}}\r\n                                </ng-template>\r\n                              </ngx-datatable-column>\r\n                              <ngx-datatable-column name=\"Tần suất\" sortable=\"true\" prop=\"ts\">\r\n                                <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                                  {{column.name}}\r\n                                </ng-template>\r\n                                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                  {{value}}\r\n                                </ng-template>\r\n                              </ngx-datatable-column>\r\n                              <ngx-datatable-column name=\"Thời gian\" sortable=\"true\" prop=\"tg\">\r\n                                <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                                  {{column.name}}\r\n                                </ng-template>\r\n                                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                  {{value}}\r\n                                </ng-template>\r\n                              </ngx-datatable-column>\r\n                              <ngx-datatable-column name=\"\" sortable=\"true\" prop=\"id\" [width]=\"10\">\r\n                                <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                                  {{column.name}}\r\n                                </ng-template>\r\n                                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                  <span style=\"color:rgb(107, 107, 107);font-size: 14px;\">\r\n                                    <i class=\"material-icons md-18\" style=\"margin-right: 10px;\" (click)=\"ke_don(row)\">create</i>\r\n                                    <i class=\"material-icons md-18\" (click)=\"deleteRow1(row)\">clear</i>\r\n                                  </span>\r\n                                </ng-template>\r\n                              </ngx-datatable-column>\r\n                            </ngx-datatable>\r\n\r\n                            <div class=\"row\" style=\"padding: 0px 25px;\">\r\n                              <button class=\"btn btn-sm btn-primary\" style=\"padding: 10px 20px;font-weight: bold; background: #dddddd;color:black\" (click)=\"addData()\">\r\n                                <i class=\"material-icons\">add</i>\r\n                                <span>THÊM THUỐC</span>\r\n                              </button>\r\n                              <button class=\"btn btn-sm btn-primary\" style=\"padding: 10px 20px;font-weight: bold;background: #dddddd;color:black \" (click)=\"luu_mau_don_thuoc()\">\r\n                                <span>LƯU MẪU ĐƠN THUỐC</span>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                          <!-- end Danh sách thuốc đã kê -->\r\n\r\n                          <!-- Kê đơn chi tiết -->\r\n                          <bs-modal #kedonchitiet [backdrop]=\"'static'\" [keyboard]=\"false\">\r\n                            <form #kedonForm=\"ngForm\" (ngSubmit)=\"saveData()\">\r\n                              <bs-modal-header>\r\n                                <h4 class=\"modal-title\">Kê đơn chi tiết</h4>\r\n                              </bs-modal-header>\r\n                              <bs-modal-body>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-12\" style=\"border-bottom: 1px solid #e5e5e5;\">\r\n                                    <div class=\"col-md-5\" style=\"padding-top: 37px;font-size: 17px;font-weight: 400;\">\r\n                                      <span>Số lượng</span>\r\n                                    </div>\r\n                                    <div class=\"col-md-2\">\r\n                                      <div class=\"form-group\" style=\"margin-top:0px\">\r\n                                        <label class=\"control-label\">Số lượng</label>\r\n                                        <input class=\"form-control\" maxlength=\"15\" [(ngModel)]=\"obj_edit.sl\" name=\"sl\" required #sl=\"ngModel\" />\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-2\">\r\n                                      <div class=\"form-group\" style=\"width: 100%;padding: 0;margin-top: 0px\">\r\n                                        <label class=\"control-label\">Đơn vị</label>\r\n                                        <select class=\"browser-default form-control\" [(ngModel)]=\"obj_edit.dv\" name=\"dv\" required #dv=\"ngModel\">\r\n                                          <option [ngValue]=\"item.name\" *ngFor=\"let item of Arraydv\">{{item.name}}</option>\r\n                                        </select>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                      <button class=\"btn btn-sm btn-primary\" style=\"padding: 5px 30px;font-weight: bold;background: #dddddd;color: black;margin-top: 40px;\">\r\n                                        <span>OK</span>\r\n                                      </button>\r\n                                      <i class=\"material-icons md-18\" style=\"font-size: 17px;float: right;margin-top: 45px;margin-right: -10px;\">clear</i>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-12\" style=\"border-bottom: 1px solid #e5e5e5;\">\r\n                                    <div class=\"col-md-9\" style=\"padding-top: 15px;padding-bottom:15px;font-size: 17px;font-weight: 400;\">\r\n                                      <span>Dạng đóng gói</span>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                      <div class=\"form-group\" style=\"width: 100%;padding: 0;margin-top: 0px\">\r\n                                        <!-- <label class=\"control-label\">Đơn vị</label> -->\r\n                                        <select style=\"background: none;margin-top: 8px;\" class=\"browser-default form-control\" [(ngModel)]=\"obj_edit.dv\" name=\"dv\" required #dv=\"ngModel\">\r\n                                          <option [ngValue]=\"item.name\" *ngFor=\"let item of Arraydv\">{{item.name}}</option>\r\n                                        </select>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-12\" style=\"border-bottom: 1px solid #e5e5e5;\">\r\n                                    <div class=\"col-md-9\" style=\"padding-top: 15px;padding-bottom:15px;font-size: 17px;font-weight: 400;\">\r\n                                      <span>Đường dùng</span>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                      <div class=\"form-group\" style=\"width: 100%;padding: 0;margin-top: 0px\">\r\n                                        <!-- <label class=\"control-label\">Đơn vị</label> -->\r\n                                        <select style=\"background: none;margin-top: 8px;\" class=\"browser-default form-control\" [(ngModel)]=\"obj_edit.dv\" name=\"dv\" required #dv=\"ngModel\">\r\n                                          <option [ngValue]=\"item.name\" *ngFor=\"let item of Arraydv\">{{item.name}}</option>\r\n                                        </select>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-12\" style=\"border-bottom: 1px solid #e5e5e5;\">\r\n                                    <div class=\"col-md-9\" style=\"padding-top: 15px;padding-bottom:15px;font-size: 17px;font-weight: 400;\">\r\n                                      <span>Liều lượng</span>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                      <div class=\"form-group\" style=\"width: 100%;padding: 0;margin-top: 0px\">\r\n                                        <!-- <label class=\"control-label\">Đơn vị</label> -->\r\n                                        <select style=\"background: none;margin-top: 8px;\" class=\"browser-default form-control\" [(ngModel)]=\"obj_edit.dv\" name=\"dv\" required #dv=\"ngModel\">\r\n                                          <option [ngValue]=\"item.name\" *ngFor=\"let item of Arraydv\">{{item.name}}</option>\r\n                                        </select>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-12\" style=\"border-bottom: 1px solid #e5e5e5;\">\r\n                                    <div class=\"col-md-9\" style=\"padding-top: 15px;padding-bottom:15px;font-size: 17px;font-weight: 400;\">\r\n                                      <span>Tần suất</span>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                      <div class=\"form-group\" style=\"width: 100%;padding: 0;margin-top: 0px\">\r\n                                        <!-- <label class=\"control-label\">Đơn vị</label> -->\r\n                                        <select style=\"background: none;margin-top: 8px;\" class=\"browser-default form-control\" [(ngModel)]=\"obj_edit.dv\" name=\"dv\" required #dv=\"ngModel\">\r\n                                          <option [ngValue]=\"item.name\" *ngFor=\"let item of Arraydv\">{{item.name}}</option>\r\n                                        </select>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-12\" style=\"border-bottom: 1px solid #e5e5e5;\">\r\n                                    <div class=\"col-md-9\" style=\"padding-top: 15px;padding-bottom:15px;font-size: 17px;font-weight: 400;\">\r\n                                      <span>Thời gian dùng</span>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                      <div class=\"form-group\" style=\"width: 100%;padding: 0;margin-top: 0px\">\r\n                                        <!-- <label class=\"control-label\">Đơn vị</label> -->\r\n                                        <select style=\"background: none;margin-top: 8px;\" class=\"browser-default form-control\" [(ngModel)]=\"obj_edit.dv\" name=\"dv\" required #dv=\"ngModel\">\r\n                                          <option [ngValue]=\"item.name\" *ngFor=\"let item of Arraydv\">{{item.name}}</option>\r\n                                        </select>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-12\" style=\"border-bottom: 1px solid #e5e5e5;\">\r\n                                    <div class=\"col-md-8\" style=\"padding-top: 15px;padding-bottom:15px;font-size: 17px;font-weight: 400;\">\r\n                                      <span>Ghi chú</span>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                      <div class=\"form-group\" style=\"width: 100%;padding: 0;margin-top: 0px\">\r\n                                        <input class=\"form-control\"  name=\"sl\" required />\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <style>\r\n                                  .label-control {\r\n                                    margin-top: 8px;\r\n                                  }\r\n                                </style>\r\n                              </bs-modal-body>\r\n                              <bs-modal-footer style=\"margin:auto\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-3\"><a (click)=\"huy_ke_don()\" style=\"float: left;\r\n                                    font-size: 15px;\r\n                                    margin-left: 27px;\r\n                                    font-weight: 700;\r\n                                    border-bottom: 1px solid;\r\n                                    color: #6f6f6f;\">HỦY</a></div>\r\n                                  <div class=\"col-md-9\"><button style=\"margin: auto;\r\n                                    padding: 8px 110px;\r\n                                    float: left;\r\n                                    background: #d8d8d8;\r\n                                    color: black;\r\n                                    font-weight: 700;\" type=\"submit\" class=\"btn btn-primary\">Đồng ý</button></div>\r\n                                </div>\r\n                                <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"huy_ke_don()\" style=\"margin-bottom:0;\">Hủy bỏ</button> -->\r\n\r\n                              </bs-modal-footer>\r\n                            </form>\r\n                          </bs-modal>\r\n\r\n                          <!-- end kê đơn chi tiết -->\r\n\r\n                          <!-- Modal Add EDIT -->\r\n                          <bs-modal #modal1 [backdrop]=\"'static'\" [keyboard]=\"false\">\r\n                            <form #modalForm=\"ngForm\" (ngSubmit)=\"saveData()\">\r\n                              <bs-modal-header>\r\n                                <h4 class=\"modal-title\" *ngIf=\"state_type === 'new'\">Thêm mới phúc lợi</h4>\r\n                                <h4 class=\"modal-title\" *ngIf=\"state_type === 'edit'\">Sửa phúc lợi</h4>\r\n                              </bs-modal-header>\r\n                              <bs-modal-body>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-12\">\r\n                                    <div class=\"col-sm-6\">\r\n                                      <div class=\"form-group\">\r\n                                        <label class=\"control-label\">Mã phúc lợi</label>\r\n                                        <!-- <input class=\"form-control\" maxlength=\"15\" [(ngModel)]=\"obj_edit.code\" name=\"code\" required #code=\"ngModel\" /> -->\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6\">\r\n                                      <div class=\"form-group\">\r\n                                        <label class=\"control-label\">Tên phúc lợi</label>\r\n                                        <!-- <input class=\"form-control\" maxlength=\"15\" [(ngModel)]=\"obj_edit.name\" name=\"name\" required #name=\"ngModel\" /> -->\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-12\">\r\n                                    <div class=\"col-sm-6\">\r\n                                      <div class=\"form-group\">\r\n                                        <label class=\"control-label\">Giá</label>\r\n                                        <!-- <input class=\"form-control\" type=\"number\" [(ngModel)]=\"obj_edit.price\" name=\"price\" required #price=\"ngModel\" /> -->\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6\">\r\n                                      <div class=\"form-group\">\r\n                                        <label class=\"control-label\">Giá bảo hiểm</label>\r\n                                        <!-- <input class=\"form-control\" type=\"number\" [(ngModel)]=\"obj_edit.priceIns\" name=\"priceIns\" required #priceIns=\"ngModel\" /> -->\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <style>\r\n                                  .label-control {\r\n                                    margin-top: 8px;\r\n                                  }\r\n                                </style>\r\n                              </bs-modal-body>\r\n                              <bs-modal-footer>\r\n                                <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelSave()\" style=\"margin-bottom:0;\">Hủy bỏ</button>\r\n                                <button type=\"submit\" class=\"btn btn-primary\">Đồng ý</button>\r\n                              </bs-modal-footer>\r\n                            </form>\r\n                          </bs-modal>\r\n\r\n                          <!-- Modal Confirm Delete -->\r\n                          <bs-modal #confirmdeletemodal [backdrop]=\"'static'\" [keyboard]=\"false\">\r\n                            <bs-modal-body>\r\n                              <div class=\"container\" style=\"padding: 10px 25px;width:100%;\">\r\n                                Xác nhận xóa\r\n                              </div>\r\n                            </bs-modal-body>\r\n                            <bs-modal-footer>\r\n                              <div style=\"padding-right:40px;\">\r\n                                <button type=\"button\" class=\"btn btn-default-2\" (click)=\"confirmdeletemodal.close()\" style=\"margin-bottom:0;margin-right:10px;\">Hủy bỏ</button>\r\n                                <button type=\"button\" (click)=\"removeOK()\" class=\"btn btn-primary\">\r\n                                  Đồng ý </button>\r\n                              </div>\r\n                            </bs-modal-footer>\r\n                          </bs-modal>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- End Tìm thuốc -->\r\n\r\n                <!-- Đơn thuốc có sẵn -->\r\n                <div *ngIf=\"step_thuoc===1\" style=\"padding: 0px 30px\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"form-group\" style=\"width: 100%;padding: 0;\">\r\n                        <label class=\"control-label\">Tìm kiếm đơn thuốc có sẵn...</label>\r\n                        <input class=\"form-control\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                      <ngx-datatable class=\"material\" [rows]=\"arry_don_thuoc_co_san\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"40\"\r\n                        [rowHeight]=\"40\" [limit]=\"5\" style=\"width:100%\">\r\n                        <ngx-datatable-column sortable=\"false\" prop=\"name\" name=\"Danh sách đơn thuốc có sẵn\">\r\n                          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <p (click)=\"detail_don_thuoc(row)\">{{value}}</p>\r\n                          </ng-template>\r\n                        </ngx-datatable-column>\r\n                      </ngx-datatable>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- End Đớn thuốc có sẵn -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row footer\">\r\n    <div class=\"col-sm-12\" *ngIf=\"step===0\">\r\n      <div class=\"col-sm-6\">\r\n        <button class=\"btn btn-danger\">HỦY KHÁM</button>\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <button class=\"btn btn-info\" style=\"margin-right: 25px;\">CHUYỂN KHOA</button>\r\n        <button class=\"btn btn-default\">KẾT THÚC KHÁM</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = ".page-doctor-exam {\n  margin-top: 50px; }\n  .page-doctor-exam .row-header {\n    border-top: 1px solid #cecece;\n    border-bottom: 1px solid #cecece;\n    padding: 25px 0 10px;\n    margin-bottom: 25px; }\n    .page-doctor-exam .row-header .step-number {\n      padding: 5px 10px;\n      border-radius: 15px;\n      background: #cecece;\n      margin-right: 5px;\n      cursor: pointer; }\n    .page-doctor-exam .row-header .step-name {\n      font-weight: 500;\n      color: #cecece;\n      cursor: pointer; }\n    .page-doctor-exam .row-header .step-name.active {\n      color: black; }\n    .page-doctor-exam .row-header .step-number.active {\n      background: black;\n      color: white; }\n  .page-doctor-exam .row.main {\n    padding: 25px 15px 35px;\n    background: white;\n    height: 100%;\n    border-radius: 3px;\n    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); }\n    .page-doctor-exam .row.main .title-step-1 {\n      margin-bottom: 15px; }\n  .page-doctor-exam .row.main2 .col-left {\n    padding-left: 0px; }\n    .page-doctor-exam .row.main2 .col-left .left {\n      background: white;\n      height: 100%;\n      border-radius: 3px;\n      box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); }\n      .page-doctor-exam .row.main2 .col-left .left .step-number {\n        padding: 12px 28px;\n        border-radius: 55px;\n        margin-right: 5px;\n        font-size: 13px;\n        cursor: pointer; }\n      .page-doctor-exam .row.main2 .col-left .left .step-name {\n        font-weight: 500;\n        color: #cecece;\n        cursor: pointer; }\n      .page-doctor-exam .row.main2 .col-left .left .step-name.active {\n        color: black; }\n      .page-doctor-exam .row.main2 .col-left .left .step-number.active {\n        background: black;\n        color: white; }\n  .page-doctor-exam .row.main2 .col-right {\n    padding-right: 0px; }\n  .page-doctor-exam .row.main2 .step4 .col-left {\n    padding-left: 0px; }\n    .page-doctor-exam .row.main2 .step4 .col-left .left {\n      background: white;\n      height: 100%;\n      border-radius: 3px;\n      box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); }\n  .page-doctor-exam .row.main2 .step4 .step-number {\n    border-radius: 3px;\n    margin-right: 5px;\n    font-size: 13px;\n    cursor: pointer;\n    text-align: center;\n    color: #979797;\n    padding-top: 20px;\n    padding-bottom: 6px; }\n  .page-doctor-exam .row.main2 .step4 .step-number.active {\n    background: #666666;\n    color: white; }\n"

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(754);

var DoctorRoutes = [
    {
        path: 'doctor',
        children: [{
                path: 'list',
                component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* DoctorListComponent */]
            }, {
                path: 'examination/:id',
                component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* DoctorExaminationComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=3.js.map