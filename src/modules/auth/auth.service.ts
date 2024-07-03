import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { AuthDto } from "./auth.dto";

const prisma = new PrismaClient();

export default class AuthService {
  static async create(data: AuthDto) {
    // const hashPassword = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10))

    const user = await prisma.auth.create({
      data: {
        username: data.username,
        password: data.password,
      },
    });
    return user;
  }

  static async findOne(id: number) {
    const user = await prisma.auth.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  static async findUsername(username: string) {
    const user = await prisma.auth.findUnique({
      where: {
        username,
      },
    });
    return user
  }

  static async update(id: number, data: AuthDto) {
    const user = await prisma.auth.update({
      where: {
        id,
      },
      data: data,
    });
    return user;
  }
}
