import { PrismaClient, Category as PrismaCategory } from "@prisma/client";

const prisma = new PrismaClient();

export interface CategoryDto {
  name: string;
}

export default class CategoryService {
  static async create(data: CategoryDto): Promise<PrismaCategory> {
    const category = await prisma.category.create({
      data: {
        name: data.name,
      },
    //   include: {
    //     product: true, // include agarki product karak bo'lsa
    //   },
    });
    return category;
  }

  static async findAll(): Promise<PrismaCategory[]> {
    const categories = await prisma.category.findMany({
      include: {
        product: true,
      },
    });
    return categories;
  }

  static async findOne(id: number): Promise<PrismaCategory | null> {
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
      include: {
        product: true,
      },
    });
    return category;
  }

  static async update(id: number, data: CategoryDto): Promise<PrismaCategory> {
    const category = await prisma.category.update({
      where: {
        id,
      },
      data: {
        name: data.name,
      },
      include: {
        product: true,
      },
    });
    return category;
  }

  static async delete(id: number): Promise<PrismaCategory> {
    const category = await prisma.category.delete({
      where: {
        id,
      },
    });
    return category;
  }
}
