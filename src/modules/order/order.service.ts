import { PrismaClient, Order as PrismaOrder } from "@prisma/client";

const prisma = new PrismaClient();

export interface OrderDto {
  order_id: string;
  products: number[];
  status: 'preparing' | 'ready' | 'waiting_time' | 'canceled';
}

export default class OrderService {
  static async create(data: OrderDto): Promise<PrismaOrder> {
    try {
      const order = await prisma.order.create({
        data: {
          order_id: data.order_id,
          status: data.status,
          products: {
            connect: data.products.map((id) => ({ id })),
          },
        },
        include: {
          products: true,
        },
      });
      return order;
    } catch (error) {
      throw new Error(`Error creating order: ${error}`);
    }
  }

  static async findAll(): Promise<PrismaOrder[]> {
    try {
      const orders = await prisma.order.findMany({
        include: {
          products: true,
        },
      });
      return orders;
    } catch (error) {
      throw new Error(`Error fetching orders: ${error}`);
    }
  }

  static async findOne(id: number): Promise<PrismaOrder | null> {
    try {
      const order = await prisma.order.findUnique({
        where: {
          id,
        },
        include: {
          products: true,
        },
      });
      return order;
    } catch (error) {
      throw new Error(`Order not found: ${error}`);
    }
  }

  static async update(id: number, data: OrderDto): Promise<PrismaOrder> {
    try {
      const order = await prisma.order.update({
        where: {
          id,
        },
        data: {
          order_id: data.order_id,
          status: data.status,
          products: {
            set: data.products.map((productId) => ({ id: productId })),
          },
        },
        include: {
          products: true,
        },
      });
      return order;
    } catch (error) {
      throw new Error(`Error updating order: ${error}`);
    }
  }

  static async delete(id: number): Promise<PrismaOrder> {
    try {
      const order = await prisma.order.delete({
        where: {
          id,
        },
      });
      return order;
    } catch (error) {
      throw new Error(`Error deleting order: ${error}`);
    }
  }
}
