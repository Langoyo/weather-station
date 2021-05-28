(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andre/PycharmProjects/finalchallenge/IoTServicesCode/webapp_frontend/app/web/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



function AppComponent_div_0_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_tr_12_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const device_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.getMeasurements(device_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Measurements");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", device_r4["device_id"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", device_r4["status"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", device_r4["location"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", device_r4["timestamp"], " ");
} }
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Device");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_0_tr_12_Template, 12, 4, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.getDevices(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Fetch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.devices);
} }
function AppComponent_ng_template_1_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const measurement_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", measurement_r10["timestamp"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", measurement_r10["temperature"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", measurement_r10["humidity"], " ");
} }
function AppComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.getBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Start date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_1_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.startDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " End date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_1_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.endDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Temperature: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_1_Template_select_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.typeMeasurements = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Temperature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Humidity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Both");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.filterMeasurements(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Temperature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Humidity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AppComponent_ng_template_1_tr_28_Template, 7, 3, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r2.selectedDevice["device_id"], " - ", ctx_r2.selectedDevice["status"], " - ", ctx_r2.selectedDevice["location"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.typeMeasurements);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.measurements);
} }
class AppComponent {
    constructor() {
        this.title = 'DSO-final-challenge';
        this.devices = {};
        this.measurements = {};
        this.showDevices = true;
        this.selectedDevice = {};
        this.startDate = '2000-01-01 00:00:00 ';
        this.endDate = '3000-01-01 00:00:00 ';
        this.typeMeasurements = 'both';
    }
    getDevices() {
        fetch('http://35.242.237.140:5001/dso/devices/')
            .then(response => response.json())
            .then(data => this.devices = data);
    }
    getMeasurements(deviceId) {
        this.startDate = '2000-01-01 00:00:00 ';
        this.endDate = '3000-01-01 00:00:00 ';
        this.selectedDevice = deviceId;
        fetch('http://35.242.237.140:5001/dso/devices/query', {
            method: 'post',
            body: JSON.stringify({
                "device_id": this.selectedDevice["device_id"],
                "start_date": this.startDate,
                "end_date": this.endDate,
                "type": this.typeMeasurements
            })
        })
            .then(response => response.json())
            .then(data => this.measurements = data);
        this.showDevices = false;
    }
    filterMeasurements() {
        fetch('http://35.242.237.140:5001/dso/devices/query', {
            method: 'post',
            body: JSON.stringify({
                "device_id": this.selectedDevice["device_id"],
                "start_date": this.startDate,
                "end_date": this.endDate,
                "type": this.typeMeasurements
            })
        })
            .then(response => response.json())
            .then(data => this.measurements = data);
    }
    getBack() {
        this.showDevices = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["other_content", ""], [1, "container"], [1, "table1"], [4, "ngFor", "ngForOf"], [1, "medidas"], ["colspan", "4", 1, "medidas"], [1, "fetch", 3, "click"], [3, "click"], ["name", "myForm", "ng-controller", "ExampleController"], ["type", "date", "id", "start", "name", "start", "value", "2000-01-08", 3, "ngModel", "ngModelChange"], ["type", "date", "id", "end", "name", "end", "value", "3000-01-08", 3, "ngModel", "ngModelChange"], ["name", "measurements", "id", "filtering", 3, "ngModel", "ngModelChange"], ["value", "temp"], ["value", "hum"], ["value", "both", "selected", "selected"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 17, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 29, 7, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\nHola");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDevices)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"]], styles: ["html[_ngcontent-%COMP%]{\n    background-color:linear-gradient(45deg, #49a09d, #5f2c82);\n}\n.table1[_ngcontent-%COMP%]{\n    margin-left: auto;\n    margin-right: auto;\n}\n.table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\n    border: 1px solid black;\n}\n.medidas[_ngcontent-%COMP%]{\n    border: 0px;\n}\n.container[_ngcontent-%COMP%]{\n    margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n    \n}\nth[_ngcontent-%COMP%]{\n    background-color: #55608f!important;\n    color: white;\n}\n.fetch[_ngcontent-%COMP%]{\n    background-color: black;\n    color: white; \n    width:100%;\n    display: block;\n}\n[class*=\"l-\"][_ngcontent-%COMP%] {\n    float: left;\n    padding: 10px;\n}\n[class*=\"m-\"][_ngcontent-%COMP%] {\n    float: left;\n    padding: 10px;\n}\n[class*=\"s-\"][_ngcontent-%COMP%] {\n    float: left;\n    padding: 10px;\n}\n.hide-l[_ngcontent-%COMP%] {\n    display: none;\n}\n.l-1[_ngcontent-%COMP%] {\n    width: 8.33%;\n}\n.l-2[_ngcontent-%COMP%] {\n    width: 16.66%;\n}\n.l-3[_ngcontent-%COMP%] {\n    width: 25%;\n}\n.l-4[_ngcontent-%COMP%] {\n    width: 33.33%;\n}\n.l-5[_ngcontent-%COMP%] {\n    width: 41.66%;\n}\n.l-6[_ngcontent-%COMP%] {\n    width: 50%;\n}\n.l-7[_ngcontent-%COMP%] {\n    width: 58.33%;\n}\n.l-8[_ngcontent-%COMP%] {\n    width: 66.66%;\n}\n.l-9[_ngcontent-%COMP%] {\n    width: 75%;\n}\n.l-10[_ngcontent-%COMP%] {\n    width: 83.33%;\n}\n.l-11[_ngcontent-%COMP%] {\n    width: 91.66%;\n}\n.l-12[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n@media (max-width: 768px) {\n\n    .show-m[_ngcontent-%COMP%] {\n        display: inline;\n    }\n\n    .hide-m[_ngcontent-%COMP%] {\n        display: none !important;\n    }\n\n    .m-1[_ngcontent-%COMP%] {\n        width: 8.33%;\n    }\n\n    .m-2[_ngcontent-%COMP%] {\n        width: 16.66%;\n    }\n\n    .m-3[_ngcontent-%COMP%] {\n        width: 25%;\n    }\n\n    .m-4[_ngcontent-%COMP%] {\n        width: 33.33%;\n    }\n\n    .m-5[_ngcontent-%COMP%] {\n        width: 41.66%;\n    }\n\n    .m-6[_ngcontent-%COMP%] {\n        width: 50%;\n    }\n\n    .m-7[_ngcontent-%COMP%] {\n        width: 58.33%;\n    }\n\n    .m-8[_ngcontent-%COMP%] {\n        width: 66.66%;\n    }\n\n    .m-9[_ngcontent-%COMP%] {\n        width: 75%;\n    }\n\n    .m-10[_ngcontent-%COMP%] {\n        width: 83.33%;\n    }\n\n    .m-11[_ngcontent-%COMP%] {\n        width: 91.66%;\n    }\n\n    .m-12[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n}\n\n@media (max-width: 600px) {\n\n    .show-s[_ngcontent-%COMP%] {\n        display: inline !important;\n    }\n\n    .hide-s[_ngcontent-%COMP%] {\n        display: none !important;\n    }\n\n    .s-1[_ngcontent-%COMP%] {\n        width: 8.33%;\n    }\n\n    .s-2[_ngcontent-%COMP%] {\n        width: 16.66%;\n    }\n\n    .s-3[_ngcontent-%COMP%] {\n        width: 25%;\n    }\n\n    .s-4[_ngcontent-%COMP%] {\n        width: 33.33%;\n    }\n\n    .s-5[_ngcontent-%COMP%] {\n        width: 41.66%;\n    }\n\n    .s-6[_ngcontent-%COMP%] {\n        width: 50%;\n    }\n\n    .s-7[_ngcontent-%COMP%] {\n        width: 58.33%;\n    }\n\n    .s-8[_ngcontent-%COMP%] {\n        width: 66.66%;\n    }\n\n    .s-9[_ngcontent-%COMP%] {\n        width: 75%;\n    }\n\n    .s-10[_ngcontent-%COMP%] {\n        width: 83.33%;\n    }\n\n    .s-11[_ngcontent-%COMP%] {\n        width: 91.66%;\n    }\n\n    .s-12[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseURBQXlEO0FBQzdEO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksU0FBUztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUVULGdDQUFnQzs7QUFFbEM7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQSw2QkFBNkI7QUFFN0I7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDSjtBQUVBLG1DQUFtQztBQUVuQzs7SUFFSTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztBQUVKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQ5YTA5ZCwgIzVmMmM4Mik7XG59XG4udGFibGUxe1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi50YWJsZSx0aCx0ZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi5tZWRpZGFze1xuICAgIGJvcmRlcjogMHB4O1xufVxuLmNvbnRhaW5lcntcbiAgICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBcbn1cbnRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTYwOGYhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5mZXRjaHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7IFxuICAgIHdpZHRoOjEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5bY2xhc3MqPVwibC1cIl0ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbltjbGFzcyo9XCJtLVwiXSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuW2NsYXNzKj1cInMtXCJdIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaGlkZS1sIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubC0xIHtcbiAgICB3aWR0aDogOC4zMyU7XG59XG5cbi5sLTIge1xuICAgIHdpZHRoOiAxNi42NiU7XG59XG5cbi5sLTMge1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi5sLTQge1xuICAgIHdpZHRoOiAzMy4zMyU7XG59XG5cbi5sLTUge1xuICAgIHdpZHRoOiA0MS42NiU7XG59XG5cbi5sLTYge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5sLTcge1xuICAgIHdpZHRoOiA1OC4zMyU7XG59XG5cbi5sLTgge1xuICAgIHdpZHRoOiA2Ni42NiU7XG59XG5cbi5sLTkge1xuICAgIHdpZHRoOiA3NSU7XG59XG5cbi5sLTEwIHtcbiAgICB3aWR0aDogODMuMzMlO1xufVxuXG4ubC0xMSB7XG4gICAgd2lkdGg6IDkxLjY2JTtcbn1cblxuLmwtMTIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vKlJlc3BvbnNpdmVuZXNzIGZvciB0YWJsZXRzKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgICAuc2hvdy1tIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cblxuICAgIC5oaWRlLW0ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm0tMSB7XG4gICAgICAgIHdpZHRoOiA4LjMzJTtcbiAgICB9XG5cbiAgICAubS0yIHtcbiAgICAgICAgd2lkdGg6IDE2LjY2JTtcbiAgICB9XG5cbiAgICAubS0zIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICB9XG5cbiAgICAubS00IHtcbiAgICAgICAgd2lkdGg6IDMzLjMzJTtcbiAgICB9XG5cbiAgICAubS01IHtcbiAgICAgICAgd2lkdGg6IDQxLjY2JTtcbiAgICB9XG5cbiAgICAubS02IHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAubS03IHtcbiAgICAgICAgd2lkdGg6IDU4LjMzJTtcbiAgICB9XG5cbiAgICAubS04IHtcbiAgICAgICAgd2lkdGg6IDY2LjY2JTtcbiAgICB9XG5cbiAgICAubS05IHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG5cbiAgICAubS0xMCB7XG4gICAgICAgIHdpZHRoOiA4My4zMyU7XG4gICAgfVxuXG4gICAgLm0tMTEge1xuICAgICAgICB3aWR0aDogOTEuNjYlO1xuICAgIH1cblxuICAgIC5tLTEyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4vKlJlc3BvbnNpdmVuZXNzIGZvciBtb2JpbGUgcGhvbmVzKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAuc2hvdy1zIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmhpZGUtcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucy0xIHtcbiAgICAgICAgd2lkdGg6IDguMzMlO1xuICAgIH1cblxuICAgIC5zLTIge1xuICAgICAgICB3aWR0aDogMTYuNjYlO1xuICAgIH1cblxuICAgIC5zLTMge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgIH1cblxuICAgIC5zLTQge1xuICAgICAgICB3aWR0aDogMzMuMzMlO1xuICAgIH1cblxuICAgIC5zLTUge1xuICAgICAgICB3aWR0aDogNDEuNjYlO1xuICAgIH1cblxuICAgIC5zLTYge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cblxuICAgIC5zLTcge1xuICAgICAgICB3aWR0aDogNTguMzMlO1xuICAgIH1cblxuICAgIC5zLTgge1xuICAgICAgICB3aWR0aDogNjYuNjYlO1xuICAgIH1cblxuICAgIC5zLTkge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgIH1cblxuICAgIC5zLTEwIHtcbiAgICAgICAgd2lkdGg6IDgzLjMzJTtcbiAgICB9XG5cbiAgICAucy0xMSB7XG4gICAgICAgIHdpZHRoOiA5MS42NiU7XG4gICAgfVxuXG4gICAgLnMtMTIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map