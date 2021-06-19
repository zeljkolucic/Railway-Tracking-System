"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const voz_controller_1 = require("../controllers/voz.controller");
const vozRouter = express_1.default.Router();
vozRouter.route('/dohvatiSveVozove').get((req, res) => new voz_controller_1.VozController().dohvatiSveVozove(req, res));
vozRouter.route('/azuriraj').post((req, res) => new voz_controller_1.VozController().azuriraj(req, res));
exports.default = vozRouter;
//# sourceMappingURL=voz.routes.js.map