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

  async index(request: Request, response: Response) {
    const users = await db("users").select("*");
    return response.json(users);
  }

  async getUserById(request: Request, response: Response) {
    const filters = request.query;
    const id = filters.id as string;
    if (!filters.id) {
      return response.status(400).json({
        error: "Missing filters to search user",
      });
    }
    const user = await db("users")
      .where({
        id: id,
      })
      .select("name");
    return response.json(user);
  }

  async serachByEmail(request: Request, response: Response) {
    const filters = request.query;
    const email = filters.email as string;
    if (!filters.email) {
      return response.status(400).json({
        error: "Missing filters to search user",
      });
    }
    const user = await db("users")
      .where({
        email: email,
      })
      .select("*");
    return response.json(user);
  }

  async changePassword(request: Request, response: Response) {
    const filters = request.query;
    const email = filters.email as string;
    const password = filters.password as string;
    if (!filters.email && !filters.password) {
      return response.status(400).json({
        error: "Missing filters to search user",
      });
    }
    const user = await db("users").where("email", "=", email).update({
      password: password,
    });
    return response.json(user);
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
