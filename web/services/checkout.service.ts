import { Session } from "@shopify/shopify-api";
import { Response } from "express";

import shopify from "../utils/shopify.js";
import {
  GET_CHECKOUT_LIST,
  GET_CHECKOUT_SETTINGS,
} from "../queries/checkout.quries.js";

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

  static async getCheckoutSettings(res: Response, checkoutProfileId: string) {
    const client = CheckoutService.getClient(res);

    const { body } = await client.query({
      data: {
        query: GET_CHECKOUT_SETTINGS,
        variables: {
          checkoutProfileId,
        },
      },
    });

    return body;
  }
}
