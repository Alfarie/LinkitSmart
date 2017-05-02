webpackJsonp([1,4],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 107;


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(120);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_data_component_live_data_component_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__set_point_set_point_component__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/live', pathMatch: 'full' },
    { path: 'live', component: __WEBPACK_IMPORTED_MODULE_2__live_data_component_live_data_component_component__["a" /* LiveDataComponentComponent */] },
    { path: 'setting', component: __WEBPACK_IMPORTED_MODULE_3__set_point_set_point_component__["a" /* SetPointComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_socket_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_data_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(socket, data) {
        this.socket = socket;
        this.data = data;
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(195),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_socket_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__share_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__share_data_service__["a" /* DataService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__live_data_component_live_data_component_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__share_socket_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__share_data_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__set_point_set_point_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_app_routing_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__disconnect_disconnect_component__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__live_data_component_live_data_component_component__["a" /* LiveDataComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_8__set_point_set_point_component__["a" /* SetPointComponent */],
            __WEBPACK_IMPORTED_MODULE_10__disconnect_disconnect_component__["a" /* DisconnectComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__share_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_7__share_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisconnectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisconnectComponent = (function () {
    function DisconnectComponent() {
    }
    DisconnectComponent.prototype.ngOnInit = function () {
    };
    return DisconnectComponent;
}());
DisconnectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-disconnect',
        template: __webpack_require__(196),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [])
], DisconnectComponent);

//# sourceMappingURL=disconnect.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 50px; margin-bottom: 20px;\">\n    <h3>GreenHouse</h3>\n    <div class=\"btn-group-lg\" role=\"group\" aria-label=\"...\">\n        <a routerLink=\"/live\"><button type=\"button\" class=\"btn btn-default\">Live</button></a>\n        <a routerLink=\"/setting\"><button type=\"button\" class=\"btn btn-default\">Setting</button></a>\n    </div>\n</div>\n<!--\n<app-live-data-component></app-live-data-component>-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Service status: Offline</h2>\n</div>"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"panel panel-default\">\n        <!-- Default panel contents -->\n        <div class=\"panel-heading\">Live Sensor</div>\n\n\n        <!-- Table -->\n        <table class=\"table\">\n            <tbody>\n                <tr>\n                    <td>time</td>\n                    <td>{{data.sensor.time}}</td>\n                </tr>\n                <tr>\n                    <td>vpd</td>\n                    <td>{{data.sensor.vpd}} kPa</td>\n                </tr>\n                <tr>\n                    <td>soil</td>\n                    <td>{{data.sensor.soil}} %</td>\n                </tr>\n                <tr>\n                    <td>temp</td>\n                    <td>{{data.sensor.temp}} C</td>\n                </tr>\n                <tr>\n                    <td>humi</td>\n                    <td>{{data.sensor.humi}} %</td>\n                </tr>\n                <tr>\n                    <td>light</td>\n                    <td>{{data.sensor.light}} Lux</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n</div>\n\n<app-set-point></app-set-point>"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <table>\n        <td>Channel :</td>\n        <td>\n            <div class=\"dropdown\">\n                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n        Choose\n        <span class=\"caret\"></span>\n        </button>\n                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n                    <li><a (click)=\"selected=0\">Channel 1</a></li>\n                    <li><a (click)=\"selected=1\">Channel 2</a></li>\n                    <li><a (click)=\"selected=2\">Channel 3</a></li>\n                    <li><a (click)=\"selected=3\">Channel 4</a></li>\n                </ul>\n            </div>\n        </td>\n    </table>\n\n    <div *ngFor=\"let data of data.setpoint.setPoint; let i = index;\">\n        <div *ngIf=\"selected==i\">\n            <h4>Channel {{i+1}}</h4>\n            <div>\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                    <h4><input type=\"checkbox\"  [(ngModel)]=\"data.vpd[2]\" (change)=\"data.vpd[2]=($event.target.checked)\" aria-label=\"...\"> <b>VPD</b></h4>\n            </span>\n                </div>\n                <div class=\"row\" style=\"margin-top: 10px;\" *ngIf=\"data.vpd[2]\">\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                        <b>from</b>\n                    </span>\n                            <input type=\"number\" [(ngModel)]=\"data.vpd[0]\" class=\"form-control\" aria-label=\"...\">\n                        </div>\n                        <!-- /input-group -->\n                    </div>\n                    <!-- /.col-lg-6 -->\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                        <b>to</b>\n                    </span>\n                            <input type=\"number\" [(ngModel)]=\"data.vpd[1]\" class=\"form-control\" aria-label=\"...\">\n                        </div>\n                        <!-- /input-group -->\n                    </div>\n                    <!-- /.col-lg-6 -->\n                </div>\n                <!-- /.row -->\n            </div>\n\n            <div style=\"margin-top: 30px;\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                <h4><input type=\"checkbox\" [(ngModel)]=\"data.soil[2]\" (change)=\"data.soil[2]=($event.target.checked)\" aria-label=\"...\"> <b>SOIL</b></h4>\n            </span>\n                </div>\n                <div class=\"row\" style=\"margin-top: 10px;\" *ngIf=\"data.soil[2]\">\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                        <b>from</b>\n                    </span>\n                            <input type=\"number\" [(ngModel)]=\"data.soil[0]\" class=\"form-control\" aria-label=\"...\">\n                        </div>\n                        <!-- /input-group -->\n                    </div>\n                    <!-- /.col-lg-6 -->\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                        <b>to</b>\n                    </span>\n                            <input type=\"number\" [(ngModel)]=\"data.soil[1]\" class=\"form-control\" aria-label=\"...\">\n                        </div>\n                        <!-- /input-group -->\n                    </div>\n                    <!-- /.col-lg-6 -->\n                </div>\n                <!-- /.row -->\n            </div>\n\n            <div class=\"btn-group-lg\" role=\"group\" aria-label=\"...\" style=\"margin-top: 20px; margin-bottom: 20px;\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"UpdateSetPoint()\">Update</button>\n            </div>\n\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(108);


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(io) {
        var _this = this;
        this.io = io;
        this.sensor = new SensorModel();
        this.setpoint = new SetPointModel();
        console.log("[DataService] dataservice init");
        this.io.socket.on("SENSOR_DATA", function (data) {
            _this.sensor.setValue(data.time, data.vpd, data.soil, data.temp, data.humi, data.light);
            // console.log(this.sensor)
        });
        this.io.socket.on("SET_POINT", function (data) {
            console.log('[DataService] Set Point\n ' + JSON.stringify(data));
            _this.setpoint.setPoint = data;
        });
    }
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]) === "function" && _a || Object])
], DataService);

var SensorModel = (function () {
    function SensorModel() {
        this.time = "00:00:00";
        this.vpd = 0.0;
        this.soil = 0.0;
        this.temp = 0.0;
        this.humi = 0.0;
        this.light = 0;
    }
    SensorModel.prototype.setValue = function (time, vpd, soil, temp, humi, light) {
        this.time = time;
        this.vpd = vpd;
        this.soil = soil;
        this.temp = temp;
        this.humi = humi;
        this.light = light;
    };
    return SensorModel;
}());
var SetPointModel = (function () {
    function SetPointModel() {
        this.setPoint = [
            {
                "ch": 1,
                "vpd": [2200, 2250, false],
                "soil": [40, 60, false],
                "use": true
            },
            {
                "ch": 2,
                "vpd": [2200, 2250, false],
                "soil": [40, 60, false],
                "use": true
            },
            {
                "ch": 3,
                "vpd": [2200, 2250, false],
                "soil": [40, 60, false],
                "use": true
            },
            {
                "ch": 4,
                "vpd": [2200, 2250, false],
                "soil": [40, 60, false],
                "use": true
            }
        ];
    }
    return SetPointModel;
}());
var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
        var _this = this;
        this.host = window.location.protocol + "//" + window.location.hostname + ":" + 3000;
        console.log("[SocketService] socket service");
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"](this.host);
        this.socket.on("connect", function () { return _this.connect(); });
        this.socket.on("disconnect", function () { return _this.disconnect(); });
        this.socket.on("reconect", function () { return _this.reconnect(); });
    }
    SocketService.prototype.connect = function () {
        console.log("[SocketIO] Connected");
    };
    SocketService.prototype.disconnect = function () {
        console.log("[SocketIO] Disconnect");
    };
    SocketService.prototype.reconnect = function () {
        console.log("[SocketIO] Reconnect");
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_data_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveDataComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LiveDataComponentComponent = (function () {
    function LiveDataComponentComponent(data) {
        this.data = data;
    }
    LiveDataComponentComponent.prototype.ngOnInit = function () {
    };
    return LiveDataComponentComponent;
}());
LiveDataComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-live-data-component',
        template: __webpack_require__(197),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */]) === "function" && _a || Object])
], LiveDataComponentComponent);

var _a;
//# sourceMappingURL=live-data-component.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_data_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_socket_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPointComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetPointComponent = (function () {
    function SetPointComponent(data, io) {
        this.data = data;
        this.io = io;
        this.selected = 0;
    }
    SetPointComponent.prototype.ngOnInit = function () {
    };
    SetPointComponent.prototype.UpdateSetPoint = function () {
        console.log(this.data.setpoint.setPoint);
        this.io.socket.emit("SET_POINT", this.data.setpoint.setPoint);
    };
    return SetPointComponent;
}());
SetPointComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-set-point',
        template: __webpack_require__(198),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__share_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__share_socket_service__["a" /* SocketService */]) === "function" && _b || Object])
], SetPointComponent);

var _a, _b;
//# sourceMappingURL=set-point.component.js.map

/***/ })

},[236]);
//# sourceMappingURL=main.bundle.js.map