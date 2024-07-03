import { Request, Response, NextFunction } from "express";
import DeviceService, { DeviceDto } from "./device.service";

export async function createDevice(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: DeviceDto = req.body;

    const oldDevice = await DeviceService.findOne(data.device_id);

    if (oldDevice?.device_id) {
      return res.status(409).json({
        message: "Device avval yaratilgan",
      });
    }

    const device = await DeviceService.create(data);
    res.status(201).json({
      message: "Device qo'shildi",
      device,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllDevices(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const devices = await DeviceService.findAll();
    return res.status(200).json(devices);
  } catch (error) {
    next(error);
  }
}

export async function getDeviceById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const device_id = +req.params.device_id;
    const device = await DeviceService.findOne(device_id);
    if (!device) {
      return res.status(404).json({ message: "Device topilmadi" });
    }
    return res.status(200).json(device);
  } catch (error) {
    next(error);
  }
}

export async function updateDevice(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const device_id = +req.params.device_id;

    const found = await DeviceService.findOne(device_id);

    if (!found) {
      return res.status(404).json({
        message: "Device topilmadi",
      });
    }

    const data: Partial<DeviceDto> = req.body;

    const device = await DeviceService.update(device_id, data);

    return res.status(200).json(device);
  } catch (error) {
    next(error);
  }
}

export async function deleteDevice(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = +req.params.id;

    const old = await DeviceService.findOne(id);
    if (!old) {
      return res.status(404).json({
        message: "Device topilmadi",
      });
    }

    const device = await DeviceService.delete(id);
    return res.status(200).json(device);
  } catch (error) {
    next(error);
  }
}
