import { Router } from "express";

import {
  authRouter,
  categoryRouter,
  deviceRouter,
  productRouter,
  orderRouter,
} from "../modules/index";

const router = Router();

router.use("/auth", authRouter);
router.use("/device", deviceRouter);
router.use("/category", categoryRouter);
router.use("/product", productRouter);
router.use("/order", orderRouter);

export default router;
