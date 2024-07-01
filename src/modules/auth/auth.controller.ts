import { Request, Response, NextFunction } from "express";
import { LoginDto } from "./auth.dto";
import AuthService from "./auth.service";

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const login: LoginDto = req.body;

    const user = await AuthService.findUsername(login.username);

    if (!user) {
      return res.status(401).json({
        message: "username yoki parol xato",
      });
    }

    return res.status(200).json({
      message: "Muvaffaqiyatli login",
      user: {
        id: user.id,
        username: user.username,
        device_id: user.device_id,
        device_name: user.device_name,
        description: user.description,
      },
    });
  } catch (e) {
    next(e);
  }
}
