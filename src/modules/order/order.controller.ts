import { Request, Response, NextFunction } from "express";
import OrderService, { OrderDto } from "./order.service";

export async function createOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: OrderDto = req.body;
    const order = await OrderService.create(data);
    res.status(201).json({
      msg: "Order yaratildi",
      order,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllOrders(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const orders = await OrderService.findAll();
    return res.status(200).json({
      msg: "Barcha order",
      orders,
    });
  } catch (error) {
    next(error);
  }
}

export async function getOrderById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const order = await OrderService.findOne(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json({
      msg: `${id}-id bo'yicha order`,
      order,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const data: OrderDto = req.body;

    // Check for valid status
    if (
      !["preparing", "ready", "waiting_time", "canceled"].includes(data.status)
    ) {
      return res.status(400).json({
        message:
          "Invalid status. Must be one of 'preparing', 'ready', 'waiting_time', or 'canceled'.",
      });
    }

    const order = await OrderService.update(id, data);
    res.status(200).json({
      msg: "Order updated",
      order,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    await OrderService.delete(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
}
