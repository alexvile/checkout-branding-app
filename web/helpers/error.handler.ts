import { Response } from "express";

export default function onError(error: unknown, res: Response) {
  if (error instanceof Error) {
    res.status(500).send({ error: error.message });
  } else {
    res.status(500).send({ error: "Unknown error" });
  }
}
