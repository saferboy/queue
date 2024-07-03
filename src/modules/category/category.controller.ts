import { Request, Response, NextFunction } from "express";
import CategoryService, { CategoryDto } from "./category.service";

export async function createCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: CategoryDto = req.body;
    const category = await CategoryService.create(data);
    return res.status(201).json({
      message: "Kategoriya yaratildi",
      category,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllCategories(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const categories = await CategoryService.findAll();
    return res.status(200).json({
      message: "All Category",
      categories,
    });
  } catch (error) {
    next(error);
  }
}

export async function getCategoryById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = +req.params.id;
    const category = await CategoryService.findOne(id);
    if (!category) {
      return res.status(404).json({ message: "Category topilmadi" });
    }
    return res.status(200).json({
      message: `${id}-id bo'yicha kategoriya`,
      category,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const data: CategoryDto = req.body;

    const found = await CategoryService.findOne(id);
    if (!found) {
      return res.status(404).json({ message: "Category topilmadi" });
    }

    const category = await CategoryService.update(id, data);
    res.json(category);
  } catch (error) {
    next(error);
  }
}

export async function deleteCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);

    const found = await CategoryService.findOne(id);
    if (!found) {
      return res.status(404).json({ message: "Category topilmadi" });
    }
    const category = await CategoryService.delete(id);
    return res.status(200).json({
      message: "o'chdi",
      category,
    });
  } catch (error) {
    next(error);
  }
}
