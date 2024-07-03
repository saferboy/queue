import {
  PrismaClient,
  Device as PrismaDevice,
  Device_Type,
} from "@prisma/client";

const prisma = new PrismaClient();

export interface DeviceDto {
  name: string;
  device_id: number;
  password: string;
  device_type: Device_Type;
}

export default class DeviceService {
  static async create(data: DeviceDto): Promise<PrismaDevice> {
    const device = await prisma.device.create({
      data: {
        name: data.name,
        device_id: data.device_id,
        password: data.password,
        device_type: data.device_type,
      },
    });
    return device;
  }

  static async findAll(): Promise<PrismaDevice[]> {
    const devices = await prisma.device.findMany();
    return devices;
  }

  static async findOne(device_id: number): Promise<PrismaDevice | null> {
    const device = await prisma.device.findUnique({
      where: {
        device_id,
      },
    });
    return device;
  }

  static async update(
    device_id: number,
    data: Partial<DeviceDto>
  ): Promise<PrismaDevice> {
    const device = await prisma.device.update({
      where: {
        device_id,
      },
      data,
    });
    return device;
  }

  static async delete(id: number): Promise<PrismaDevice> {
    const device = await prisma.device.delete({
      where: {
        id,
      },
    });
    return device;
  }
}
