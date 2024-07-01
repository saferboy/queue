import { Router } from "express";

import { authRouter, deviceRouter } from "../modules/index";

const router = Router();

router.use("/auth", authRouter);
router.use("/device", deviceRouter);

export default router;
