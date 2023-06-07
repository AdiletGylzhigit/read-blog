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
Object.defineProperty(exports, "__esModule", { value: true });
const { getDb } = require("../db");
const bcrypt = require("bcryptjs");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // CHECK EXISTING USER
    yield getDb.Users.findOne({
        $or: [{ email: req.body.email }, { phone: req.body.phone }],
    })
        .then((data) => {
        if (data.length)
            return res.status(409).json("User already exists!");
        // Hash the password and create a user
        const salt = bcrypt.getSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
    })
        .catch((err) => {
        return res.json(err);
    });
});
const login = (req, res) => {
    res.json("from controller");
};
const logout = (req, res) => {
    res.json("from controller");
};
module.exports = { register, login, logout };
//# sourceMappingURL=auth.js.map