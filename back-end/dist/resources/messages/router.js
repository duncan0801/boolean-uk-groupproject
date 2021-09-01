"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.get("/:id", controller_1.getMessagesByUserId);
router.post("/", controller_1.addMessage);
exports.default = router;