"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var bcrypt_1 = __importDefault(require("bcrypt"));
//@ts-ignore
var database_1 = __importDefault(require("../database"));
var pepper = process.env.BCRYPT_PASSWORD;
var saltRounds = process.env.SALT_ROUNDS;
var storeUser = /** @class */ (function () {
    function storeUser() {
    }
    storeUser.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1["default"].connect()];
                    case 1:
                        connection = _a.sent();
                        sql = "select * from users ";
                        return [4 /*yield*/, connection.query(sql)];
                    case 2:
                        result = _a.sent();
                        connection.release();
                        return [2 /*return*/, result.rows];
                }
            });
        });
    };
    //show certain user
    storeUser.prototype.show = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1["default"].connect()];
                    case 1:
                        connection = _a.sent();
                        sql = "select * from users where id=$1";
                        return [4 /*yield*/, connection.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        connection.release();
                        return [2 /*return*/, result.rows[0]];
                }
            });
        });
    };
    //create user  or sign up
    storeUser.prototype.createUser = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, s, res, sql, sql2, sql3, readIdSql, hashedPassword, result, id, res2, res3, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        return [4 /*yield*/, database_1["default"].connect()];
                    case 1:
                        connection = _a.sent();
                        s = 'select * from users where email=$1';
                        return [4 /*yield*/, connection.query(s, [u.email])];
                    case 2:
                        res = _a.sent();
                        if (u.phone1 === u.phone2) {
                            return [2 /*return*/, null];
                        }
                        //if there is a result for an email that equals the current email
                        if (res.rows.length !== 0) {
                            return [2 /*return*/, null];
                        }
                        sql = "insert into users(firstname,lastname,email,userpassword) values($1,$2,$3,$4) returning *";
                        sql2 = "INSERT INTO users_phones values($1,$2) ";
                        sql3 = "INSERT INTO users_phones values($1,$2)";
                        readIdSql = "select id from users where email=$1";
                        hashedPassword = bcrypt_1["default"].hashSync(u.password + pepper, parseInt(saltRounds));
                        return [4 /*yield*/, connection.query(sql, [u.firstName, u.lastName, u.email, hashedPassword])];
                    case 3:
                        result = _a.sent();
                        return [4 /*yield*/, connection.query(readIdSql, [u.email])];
                    case 4:
                        res = _a.sent();
                        id = res.rows[0].id;
                        console.log(res.rows[0]);
                        return [4 /*yield*/, connection.query(sql2, [id, u.phone1])];
                    case 5:
                        res2 = _a.sent();
                        if (!(u.phone2 !== null)) return [3 /*break*/, 7];
                        return [4 /*yield*/, connection.query(sql3, [id, u.phone2])];
                    case 6:
                        res3 = _a.sent();
                        _a.label = 7;
                    case 7:
                        connection.release();
                        return [2 /*return*/, result.rows[0]];
                    case 8:
                        err_1 = _a.sent();
                        throw err_1;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    storeUser.prototype.authenticateUser = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, user, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1["default"].connect()];
                    case 1:
                        connection = _a.sent();
                        sql = "select * from users where email=$1 ";
                        return [4 /*yield*/, connection.query(sql, [email])];
                    case 2:
                        result = _a.sent();
                        connection.release();
                        //check if user didn't sign up from the beginning
                        if (result.rows.length) {
                            user = result.rows[0];
                            //check user password
                            if (bcrypt_1["default"].compareSync(password + pepper, user.userpassword)) {
                                return [2 /*return*/, user];
                            }
                        }
                        return [2 /*return*/, null];
                    case 3:
                        err_2 = _a.sent();
                        console.log('catched an error');
                        throw err_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return storeUser;
}());
exports["default"] = storeUser;
