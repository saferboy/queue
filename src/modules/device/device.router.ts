import { Router } from "express";

import {
  createDevice,
  deleteDevice,
  getAllDevices,
  getDeviceById,
  updateDevice,
} from "./device.controller";

const router = Router();

router.post("/", createDevice);
router.get("/tools", getAllDevices);
router.get("/:device_id", getDeviceById);
router.put("/:device_id", updateDevice);
router.delete("/:id", deleteDevice)

export default router;
