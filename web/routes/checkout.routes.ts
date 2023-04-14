import { Router } from "express";
import { CheckoutService } from "../services/checkout.service.js";
import onError from "../helpers/error.handler.js";

const checkoutRouter = Router();

checkoutRouter.get("/checkouts", async (req, res) => {
  try {
    const chekouts = await CheckoutService.getCheckoutList(res);
    res.status(200).send({ chekouts });
  } catch (error) {
    onError(error, res);
  }
});

checkoutRouter.post("/checkout/settings", async (req, res) => {
  res.status(200).send({ route: "/checkout/settings" });
});

checkoutRouter.post("/checkout/settings/update", async (req, res) => {
  res.status(200).send({ route: "/checkout/settings/update" });
});

checkoutRouter.post("/checkout/desing-system", async (req, res) => {
  res.status(200).send({ route: "/checkout/desing-system" });
});

checkoutRouter.post("/checkout/desing-system/update", async (req, res) => {
  res.status(200).send({ route: "/checkout/desing-system/update" });
});

export { checkoutRouter };
