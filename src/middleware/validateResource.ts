import { NextFunction, Request, Response } from "express";
import { object, AnySchema } from "yup";

const validateRequest =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (err: any) {
      return res.status(400).send(err.message);
    }
  };
export default validateRequest;
