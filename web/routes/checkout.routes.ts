import { Router } from "express";
import { CheckoutService } from "../services/checkout.service.js";
import onError from "../helpers/error.handler.js";

const checkoutRouter = Router();

checkoutRouter.get("/checkouts", async (req, res) => {
  try {
    const chekouts = await CheckoutService.getCheckoutList(res);
    const settings = await CheckoutService.getCheckoutSettings(
      res,
      chekouts[0].id
    );
    res.status(200).send({ chekouts, settings });
  } catch (error) {
    onError(error, res);
  }
});

checkoutRouter.post("/checkouts", async (req, res) => {
  res.status(200).send({ route: "/checkouts" });
});

export { checkoutRouter };
