"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Voz = new Schema({
    naziv: {
        type: String
    },
    masinovodja: {
        type: String
    },
    registarskaOznaka: {
        type: String
    },
    geografskaDuzina: {
        type: String
    },
    geografskaSirina: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Voz', Voz, 'vozovi');
//# sourceMappingURL=voz.js.map