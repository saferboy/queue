import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface DeviceDto {
  name: string;
  device_id: number;
  password: string;
}

export default class DeviceService {
  static async create(data: DeviceDto) {
    const device = await prisma.device.create({
      data: {
        name: data.name,
        device_id: data.device_id,
        password: data.password,
      },
    });
    return device;
  }

  static async findAll() {
    const devices = await prisma.device.findMany();
    return devices;
  }

  static async findOne(device_id: number) {
    const device = await prisma.device.findUnique({
      where: {
        device_id,
      },
    });
    return device;
  }

  static async update(device_id: number, data: Partial<DeviceDto>) {
    const device = await prisma.device.update({
      where: {
        device_id,
      },
      data,
    });
    return device;
  }

  static async delete(id: number) {
    const device = await prisma.device.delete({
      where: {
        id,
      },
    });
    return device;
  }
}
