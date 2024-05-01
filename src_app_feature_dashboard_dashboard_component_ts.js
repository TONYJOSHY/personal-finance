"use strict";
(self["webpackChunkpersonal_finance"] = self["webpackChunkpersonal_finance"] || []).push([["src_app_feature_dashboard_dashboard_component_ts"],{

/***/ 487:
/*!********************************************************************************!*\
  !*** ./src/app/feature/dashboard/component/activities/activities.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivitiesComponent: () => (/* binding */ ActivitiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class ActivitiesComponent {
  static #_ = this.ɵfac = function ActivitiesComponent_Factory(t) {
    return new (t || ActivitiesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ActivitiesComponent,
    selectors: [["app-activities"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 0,
    consts: [[1, ""], [1, "px-3", "mb-4", "card-title"]],
    template: function ActivitiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Activities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 3000:
/*!****************************************************************************!*\
  !*** ./src/app/feature/dashboard/component/overview/overview.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewComponent: () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data */ 7356);
/* harmony import */ var src_app_shared_enum_overview_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enum/overview.enum */ 1979);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);







function OverviewComponent_div_4_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function OverviewComponent_div_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function OverviewComponent_div_4_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function OverviewComponent_div_4_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0, a1) {
  return {
    "color-green": a0,
    "color-red": a1
  };
};
function OverviewComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8)(6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, OverviewComponent_div_4_span_7_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, OverviewComponent_div_4_span_8_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, OverviewComponent_div_4_span_12_Template, 3, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, OverviewComponent_div_4_span_13_Template, 3, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.cashFlow === ctx_r0.CASHFLOW.POSITIVE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.cashFlow === ctx_r0.CASHFLOW.NEGATIVE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 8, item_r1.amount, "$"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c0, item_r1.difference === ctx_r0.DIFFENCE.INCREMENT, item_r1.difference === ctx_r0.DIFFENCE.DECREMENT));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.difference === ctx_r0.DIFFENCE.INCREMENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.difference === ctx_r0.DIFFENCE.DECREMENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r1.change, " ");
  }
}
class OverviewComponent {
  constructor() {
    this.overviewList = _data__WEBPACK_IMPORTED_MODULE_0__.OVERVIEW_LIST;
    this.DIFFENCE = src_app_shared_enum_overview_enum__WEBPACK_IMPORTED_MODULE_1__.Difference;
    this.CASHFLOW = src_app_shared_enum_overview_enum__WEBPACK_IMPORTED_MODULE_1__.CashFlow;
  }
  static #_ = this.ɵfac = function OverviewComponent_Factory(t) {
    return new (t || OverviewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: OverviewComponent,
    selectors: [["app-overview"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 1,
    consts: [[1, "mb-4"], [1, "px-3", "mb-4", "card-title"], [1, "row", "mx-0"], ["class", "col-12 col-sm-6 col-lg mb-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "col-lg", "mb-3"], [1, "row", "p-4", "border-class", "mx-0"], [1, "col-12"], [1, "overview-title", "mb-4"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "overview-amount"], [4, "ngIf"], [1, "mb-0", 3, "ngClass"], ["aria-label", "Side nav toggle icon"]],
    template: function OverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OverviewComponent_div_4_Template, 15, 14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.overviewList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
    styles: [".border-class[_ngcontent-%COMP%]{\n    border: 1px solid #6693ce;\n    border-radius: 10px;\n}\n\n.border-class[_ngcontent-%COMP%]:hover{\n    scale: 1.1;\n    transition: 0.5s ease-in-out;\n}\n\n.overview-title[_ngcontent-%COMP%]{\n    font-size: 1rem;\n    font-weight: 500;\n    color: #303030;\n}\n\n.overview-amount[_ngcontent-%COMP%]{\n    font-size: 1.2rem;\n    font-weight: 700;\n    color: #303030;\n}\n\n.color-green[_ngcontent-%COMP%]{\n    color: #008000;\n}\n\n.color-red[_ngcontent-%COMP%]{\n    color: #F04438;\n}\n\n.mat-icon[_ngcontent-%COMP%]{\n    height: 14px;\n    font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9kYXNoYm9hcmQvY29tcG9uZW50L292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyLWNsYXNze1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjkzY2U7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJvcmRlci1jbGFzczpob3ZlcntcbiAgICBzY2FsZTogMS4xO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVydmlldy10aXRsZXtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzMwMzAzMDtcbn1cblxuLm92ZXJ2aWV3LWFtb3VudHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMzAzMDMwO1xufVxuXG4uY29sb3ItZ3JlZW57XG4gICAgY29sb3I6ICMwMDgwMDA7XG59XG5cbi5jb2xvci1yZWR7XG4gICAgY29sb3I6ICNGMDQ0Mzg7XG59XG5cbi5tYXQtaWNvbntcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 4239:
/*!************************************************************************!*\
  !*** ./src/app/feature/dashboard/component/recent-transaction/data.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECENT_TRANSACTION: () => (/* binding */ RECENT_TRANSACTION)
/* harmony export */ });
const RECENT_TRANSACTION = [{
  image: 'assets/images/person1.svg',
  name: 'Jacob Thomas',
  amount: 120,
  difference: "increment",
  date: '20 Nov 2022, 10:00 AM'
}, {
  image: 'assets/images/person2.svg',
  name: 'Christina Mathew',
  amount: 16,
  difference: "decrement",
  date: '19 Nov 2022, 10:00 AM'
}, {
  image: 'assets/images/person3.svg',
  name: 'Catherine John',
  amount: 24,
  difference: "increment",
  date: '19 Nov 2022, 09:55 AM'
}, {
  image: 'assets/images/person4.svg',
  name: 'Aleena Fernandez',
  amount: 32,
  difference: "decrement",
  date: '19 Nov 2022, 09:45 AM'
}, {
  image: 'assets/images/person5.svg',
  name: 'John Samuel',
  amount: 40,
  difference: "increment",
  date: '19 Nov 2022, 09:30 AM'
}];

/***/ }),

/***/ 8409:
/*!************************************************************************************************!*\
  !*** ./src/app/feature/dashboard/component/recent-transaction/recent-transaction.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentTransactionComponent: () => (/* binding */ RecentTransactionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 4239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




function RecentTransactionComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div")(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7)(5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 4, item_r1.amount, "$"), " ");
  }
}
class RecentTransactionComponent {
  constructor() {
    this.recentTransaction = _data__WEBPACK_IMPORTED_MODULE_0__.RECENT_TRANSACTION;
  }
  static #_ = this.ɵfac = function RecentTransactionComponent_Factory(t) {
    return new (t || RecentTransactionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RecentTransactionComponent,
    selectors: [["app-recent-transaction"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 1,
    consts: [[1, "mb-4"], [1, "px-3", "mb-4", "card-title"], [1, "row", "mx-3", "p-3", "border-class"], ["class", "col-12 py-2 d-flex align-items-center justify-content-between", 4, "ngFor", "ngForOf"], [1, "col-12", "py-2", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], ["alt", "", 1, "image-class", 3, "src"], [1, "d-flex", "flex-column"], [1, "mb-0"]],
    template: function RecentTransactionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Recent transactions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RecentTransactionComponent_div_4_Template, 13, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.recentTransaction);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe],
    styles: [".image-class[_ngcontent-%COMP%]{\n    width: 3rem;\n    margin-right: 1rem;\n}\n\n.border-class[_ngcontent-%COMP%]{\n    border: 1px solid #6693ce;\n    border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9kYXNoYm9hcmQvY29tcG9uZW50L3JlY2VudC10cmFuc2FjdGlvbi9yZWNlbnQtdHJhbnNhY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNsYXNze1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmJvcmRlci1jbGFzc3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY5M2NlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 9318:
/*!********************************************************************************!*\
  !*** ./src/app/feature/dashboard/component/statistics/statistics.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatisticsComponent: () => (/* binding */ StatisticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class StatisticsComponent {
  static #_ = this.ɵfac = function StatisticsComponent_Factory(t) {
    return new (t || StatisticsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StatisticsComponent,
    selectors: [["app-statistics"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 0,
    consts: [[1, ""], [1, "px-3", "mb-4", "card-title"]],
    template: function StatisticsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Statistics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 5551:
/*!******************************************************************************!*\
  !*** ./src/app/feature/dashboard/component/your-card/your-card.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YourCardComponent: () => (/* binding */ YourCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data */ 7356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




function YourCardComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "div", 8)(6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.expiry, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.number, " ");
  }
}
class YourCardComponent {
  constructor() {
    this.cardList = _data__WEBPACK_IMPORTED_MODULE_0__.CARD_LIST;
  }
  static #_ = this.ɵfac = function YourCardComponent_Factory(t) {
    return new (t || YourCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: YourCardComponent,
    selectors: [["app-your-card"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 1,
    consts: [[1, "mb-4"], [1, "px-3", "mb-4", "card-title"], [1, "row", "mx-0"], ["class", "col-12 col-sm-6 col-lg-3 card-style pb-4", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "col-lg-3", "card-style", "pb-4"], ["alt", "", 1, "w-100", 3, "src"], [1, "position-data"], ["src", "assets/images/agency-light.svg", "alt", "", 1, "bg-agency"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-name"], [1, "mb-0", "text-number"]],
    template: function YourCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Your Cards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, YourCardComponent_div_4_Template, 12, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cardList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: [".position-data[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 1rem;\n    left: 2rem;\n    color: white;\n    width: 80%;\n    height: 75%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.text-name[_ngcontent-%COMP%]{\n    font-size: 1rem;\n}\n\n.text-number[_ngcontent-%COMP%]{\n    font-size: 1.25rem;\n}\n\n.bg-agency[_ngcontent-%COMP%]{\n    width: 9rem;\n}\n\n.card-style[_ngcontent-%COMP%]{\n    position: relative;\n}\n\n.card-style[_ngcontent-%COMP%]:hover{\n    scale: 1.1;\n    transition: 0.5s ease-in;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9kYXNoYm9hcmQvY29tcG9uZW50L3lvdXItY2FyZC95b3VyLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVix3QkFBd0I7QUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zaXRpb24tZGF0YXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxcmVtO1xuICAgIGxlZnQ6IDJyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA3NSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4udGV4dC1uYW1le1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRleHQtbnVtYmVye1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLmJnLWFnZW5jeXtcbiAgICB3aWR0aDogOXJlbTtcbn1cblxuLmNhcmQtc3R5bGV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC1zdHlsZTpob3ZlcntcbiAgICBzY2FsZTogMS4xO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 453:
/*!**********************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _component_your_card_your_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/your-card/your-card.component */ 5551);
/* harmony import */ var _component_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/statistics/statistics.component */ 9318);
/* harmony import */ var _component_recent_transaction_recent_transaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/recent-transaction/recent-transaction.component */ 8409);
/* harmony import */ var _component_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/overview/overview.component */ 3000);
/* harmony import */ var _component_activities_activities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/activities/activities.component */ 487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);







class DashboardComponent {
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 0,
    consts: [[1, "dashboard", "pt-4", "px-5"], [1, "row"], [1, "col-12", "col-md-4"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-your-card")(2, "app-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-recent-transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "app-activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _component_your_card_your_card_component__WEBPACK_IMPORTED_MODULE_0__.YourCardComponent, _component_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_1__.StatisticsComponent, _component_recent_transaction_recent_transaction_component__WEBPACK_IMPORTED_MODULE_2__.RecentTransactionComponent, _component_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__.OverviewComponent, _component_activities_activities_component__WEBPACK_IMPORTED_MODULE_4__.ActivitiesComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 7356:
/*!*******************************************!*\
  !*** ./src/app/feature/dashboard/data.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CARD_LIST: () => (/* binding */ CARD_LIST),
/* harmony export */   OVERVIEW_LIST: () => (/* binding */ OVERVIEW_LIST)
/* harmony export */ });
const CARD_LIST = [{
  name: 'Christina Mathew',
  number: '0123  4567  8910 1234',
  expiry: '07/25',
  image: 'assets/images/card1.svg'
}, {
  name: 'Christina Mathew',
  number: '0123  4567  8910 2345',
  expiry: '10/25',
  image: 'assets/images/card2.svg'
}, {
  name: 'Christina Mathew',
  number: '0123  4567  8910 3456',
  expiry: '06/25',
  image: 'assets/images/card3.svg'
}, {
  name: 'Christina Mathew',
  number: '0123  4567  8910 1239',
  expiry: '10/25',
  image: 'assets/images/card4.svg'
}];
const OVERVIEW_LIST = [{
  title: 'Total balance',
  amount: 34500.98,
  change: 1.04,
  difference: "increment",
  cashFlow: "positive"
}, {
  title: 'Income',
  amount: 8000,
  change: 1.01,
  difference: "increment",
  cashFlow: "positive"
}, {
  title: 'Expense',
  amount: 1604,
  change: 3.55,
  difference: "decrement",
  cashFlow: "negative"
}, {
  title: 'Investment',
  amount: 34500.98,
  change: 1.04,
  difference: "increment",
  cashFlow: "negative"
}, {
  title: 'Mortages & loan',
  amount: 34500.98,
  change: 1.04,
  difference: "increment",
  cashFlow: "negative"
}];

/***/ }),

/***/ 1979:
/*!**********************************************!*\
  !*** ./src/app/shared/enum/overview.enum.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CashFlow: () => (/* binding */ CashFlow),
/* harmony export */   Difference: () => (/* binding */ Difference)
/* harmony export */ });
var Difference;
(function (Difference) {
  Difference["INCREMENT"] = "increment";
  Difference["DECREMENT"] = "decrement";
})(Difference || (Difference = {}));
var CashFlow;
(function (CashFlow) {
  CashFlow["POSITIVE"] = "positive";
  CashFlow["NEGATIVE"] = "negative";
})(CashFlow || (CashFlow = {}));

/***/ })

}]);
//# sourceMappingURL=src_app_feature_dashboard_dashboard_component_ts.js.map