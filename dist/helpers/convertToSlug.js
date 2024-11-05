"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToSLug = void 0;
const unidecode_1 = __importDefault(require("unidecode"));
const convertToSLug = (text) => {
    const unidecodeText = (0, unidecode_1.default)(text.trim());
    const slug = unidecodeText.replace(/\s+/g, "-");
    return slug;
};
exports.convertToSLug = convertToSLug;