"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const { register, login, logout } = require('../controllers/auth');
const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
module.exports = router;
//# sourceMappingURL=auth.js.map