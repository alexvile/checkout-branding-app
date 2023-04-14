import { Session } from "@shopify/shopify-api";
import e, { Response } from "express";

import shopify from "../utils/shopify.js";
import { GET_CHECKOUT_LIST } from "../queries/checkout.quries.js";

export interface ICheckout {
  id: string;
  name: string;
}

interface ICheckoutResponse {
  data: {
    checkoutProfiles: {
      nodes: ICheckout[];
    };
  };
}

export class CheckoutService {
  private static getClient(res: Response) {
    const session: Session = res.locals.shopify.session;
    const client = new shopify.api.clients.Graphql({ session });
    return client;
  }

  static async getCheckoutList(res: Response) {
    const client = CheckoutService.getClient(res);

    const { body } = await client.query<ICheckoutResponse>({
      data: GET_CHECKOUT_LIST,
    });

    return body.data.checkoutProfiles.nodes;
  }
}
