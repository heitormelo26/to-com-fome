import { Request, Response } from "express";

import db from "../database/connection";

export default class UsersController {
  async create(request: Request, response: Response) {
    const filters = request.body;
    const name = filters.name;
    const email = filters.email as string;
    const password = filters.password;
    const user: any = await db("users")
      .select("*")
      .where("email", email)
      .limit(1);
    if (!user[0]) {
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
    } else {
      return response.status(205).send();
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

  async getUserByEmail(request: Request, response: Response) {
    const filters = request.query;
    const email = filters.email as string;
    console.log(email);
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
    const filters = request.query;
    const email = filters.email as string;
    const password = filters.password as string;
    if (!filters.email && !filters.password) {
      return response.status(400).json({
        error: "Missing filters to log user",
      });
    }
    const user = await db("users")
      .where({
        email: email,
        password: password,
      })
      .select("id", "email", "name")
      .limit(1);
    return response.json(user);
  }
}
