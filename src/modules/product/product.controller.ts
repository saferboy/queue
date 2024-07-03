import { Request, Response, NextFunction } from "express";
import ProductService, { ProductDto } from "./product.service";
import CategoryService from "../category/category.service";

export async function createProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: ProductDto = req.body;

    const ctg = await CategoryService.findOne(data.categoryId!);

    if (!ctg) {
      return res.status(404).json({
        message: "Category topilmadi",
      });
    }

    const product = await ProductService.create(data);
    return res.status(201).json({
      message: "Product yaratildi",
      product,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllProducts(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const products = await ProductService.findAll();
    res.status(200).json({
      msg: "barcha mahsulotlar",
      products,
    });
  } catch (error) {
    next(error);
  }
}

export async function getProductById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const product = await ProductService.findOne(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      msg: `${id}-id bo'yicha product`,
      product,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const data: ProductDto = req.body;

    const ctg = await CategoryService.findOne(data.categoryId!);

    if (!ctg) {
      return res.status(404).json({
        message: "Category topilmadi",
      });
    }
    const product = await ProductService.update(id, data);
    res.status(200).json({
      msg: "Product yangilandi",
      product,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);

    const found = await ProductService.findOne(id);

    if (!found) {
      return res.status(404).json({
        message: "Product topilmadi",
      });
    }

    const product = await ProductService.delete(id);
    res.status(200).json({
      msg: "product o'chirildi",
      product,
    });
  } catch (error) {
    next(error);
  }
}
