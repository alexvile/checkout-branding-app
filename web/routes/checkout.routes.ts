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

checkoutRouter.get("/checkout-settings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const checkoutProfileId = `gid://shopify/CheckoutProfile/${id}`;
    const settings = await CheckoutService.getCheckoutSettings(
      res,
      checkoutProfileId
    );
    res.status(200).send({ settings });
  } catch (error) {
    onError(error, res);
  }
});

checkoutRouter.post("/checkout-settings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const checkoutProfileId = `gid://shopify/CheckoutProfile/${id}`;
    const updatedSettings = await CheckoutService.setCheckoutSettings(
      res,
      checkoutProfileId,
      req.body
    );
    res.status(200).send({ updatedSettings });
  } catch (error) {
    onError(error, res);
  }
});

export { checkoutRouter };
