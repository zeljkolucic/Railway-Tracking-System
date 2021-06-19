"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VozController = void 0;
const voz_1 = __importDefault(require("../models/voz"));
class VozController {
    constructor() {
        this.dohvatiSveVozove = (req, res) => {
            voz_1.default.find({}, (err, vozovi) => {
                if (err)
                    console.log(err);
                else
                    res.json(vozovi);
            });
        };
        this.azuriraj = (req, res) => {
            let naziv = req.body.naziv;
            let geografskaDuzina = req.body.geografskaDuzina;
            let geografskaSirina = req.body.geografskaSirina;
            voz_1.default.collection.updateOne({}, { $set: { 'geografskaDuzina': geografskaDuzina, 'geografskaSirina': geografskaSirina } });
            res.json({ 'poruka': 'ok' });
        };
    }
}
exports.VozController = VozController;
//# sourceMappingURL=voz.controller.js.map