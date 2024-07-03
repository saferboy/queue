import { PrismaClient, Product as PrismaProduct } from "@prisma/client";

const prisma = new PrismaClient();

export interface ProductDto {
  name: string;
  comment?: string;
  price: string;
  amount: Amount;
  orderId?: number;
  categoryId?: number;
}

export enum Amount {
  unit = "unit",
  weight = "weight",
  liter = "liter",
}

export default class ProductService {
  static async create(data: ProductDto): Promise<PrismaProduct> {
    const product = await prisma.product.create({
      data: {
        name: data.name,
        comment: data.comment,
        price: data.price,
        amount: data.amount,
        orderId: data.orderId,
        categoryId: data.categoryId,
      },
      //   include: {
      //     order: true,
      //     Category: true,
      //   },
    });
    return product;
  }

  static async findAll(): Promise<PrismaProduct[]> {
    const products = await prisma.product.findMany({
      include: {
        order: true,
        Category: true,
      },
    });
    return products;
  }

  static async findOne(id: number): Promise<PrismaProduct | null> {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        order: true,
        Category: true,
      },
    });
    return product;
  }

  static async update(id: number, data: ProductDto): Promise<PrismaProduct> {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        comment: data.comment,
        price: data.price,
        amount: data.amount,
        orderId: data.orderId,
        categoryId: data.categoryId,
      },
      include: {
        order: true,
        Category: true,
      },
    });
    return product;
  }

  static async delete(id: number): Promise<PrismaProduct> {
    const product = await prisma.product.delete({
      where: {
        id,
      },
    });
    return product;
  }
}
