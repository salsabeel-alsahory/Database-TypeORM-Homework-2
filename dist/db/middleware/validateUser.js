"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const validator_1 = __importDefault(require("validator")); // Import the validator package
const validateUser = (req, res, next) => {
    const { username, password, email, roles } = req.body;
    const errorList = [];
    if (!username || typeof username !== 'string') {
        errorList.push('Username is required and must be a string.');
    }
    if (!password || typeof password !== 'string') {
        errorList.push('Password is required and must be a string.');
    }
    if (!email || !validator_1.default.isEmail(email)) {
        errorList.push('Email is required and must be a valid email address.');
    }
    if (!Array.isArray(roles) || roles.length === 0) {
        errorList.push('At least one role is required for the user.');
    }
    if (errorList.length > 0) {
        return res.status(400).json({ error: errorList });
    }
    // You can also validate roles further if needed
    next();
};
exports.validateUser = validateUser;
