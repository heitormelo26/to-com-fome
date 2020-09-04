"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mail_1 = __importDefault(require("./mail"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.app.use(body_parser_1.default.json());
        this.routes();
    }
    App.prototype.routes = function () {
        this.app.route("/").get(function (req, res) {
            res.send({ result: "version 0.0.2" });
        });
        this.app.route("/").post(function (req, res) {
            var message = Object.assign({}, req.body);
            mail_1.default.to = message.to;
            mail_1.default.subject = message.subject;
            mail_1.default.message = message.message;
            var result = mail_1.default.sendMail();
            res.status(200).json({ result: result });
        });
    };
    return App;
}());
exports.default = new App();
