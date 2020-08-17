import { Request, Response } from "express";

import db from "../database/connection";

export default class UsersController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const trx = await db.transaction();
    try {
      await trx("users").insert({
        name,
        email,
        password,
      });
      await trx.commit();
      return response.status(201).send();
    } catch (err) {
      await trx.rollback();
      return response.status(400).json({
        error: "Unexpected error while creating new user",
      });
    }
  }
}
