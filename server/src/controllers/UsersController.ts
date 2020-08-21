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

  async login(request: Request, response: Response) {
    const { email, password } = request.body;
    const trx = await db.transaction();
    try {
      const user = await db("users") // fazer taxa de compatibilidade
        .whereExists(function () {
          this.select("id")
            .from("users")
            .whereRaw("`email` = ??", email)
            .whereRaw("`password` = ??", password);
        })
        .select(["users"]);
      return response.json(user);
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
