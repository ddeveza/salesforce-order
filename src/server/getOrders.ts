"use server";

import { api } from "@/lib/axios";
import axios from "axios";
import { get } from "./actions/auth";
interface Order {
  Id: string;
  Name: string;
  EffectiveDate: string;
  OrderNumber: string;
}

export async function getOrdersConsumerType() {
  const query = "SELECT Id, Name, EffectiveDate,OrderNumber FROM Order WHERE RecordTypeId = '012Hs000001msx7IAA' ORDER BY OrderNumber DESC"; //RecordTypId =012Hs000001msx7IAA this Id is for Order-Consumer
  try {
    const { data } = await api.get("data/v56.0/query/", {
      params: {
        q: query,
      },
    });
    return data.records.map((order: Order) => ({
      orderNumber: order.OrderNumber,
      name: order.Name,
      startDate: order.EffectiveDate,
      id: order.Id,
    }));
  } catch (error) {
    console.log({ error });
  }
}

export async function getProductsByCartId(cartId: string) {
  try {
    const { data } = await api.get(`apexrest/vlocity_cmt/v2/cpq/carts/${cartId}/products`);
    return data.records?.map((product: any) => ({
      name: product.name,
      value: product.UnitPrice.value,
      id: product.productId,
    }));
  } catch (error) {
    console.log({ error });
  }
}

export async function createCart(name: string) {
  const token = (await get("token"))?.value;
  let data = JSON.stringify({
    methodName: "createCart",
    objectType: "Order",
    inputFields: [
      {
        effectivedate: new Date().toLocaleDateString(),
      },
      {
        status: "Draft",
      },
      {
        Name: name,
      },
      {
        AccountId: "001Hs00003XyS9jIAF",
      },
      {
        RecordTypeId: "012Hs000001msx7IAA",
      },
      {
        vlocity_cmt__PriceListId__c: "aCMHs000000TrJ6OAK",
      },
    ],
    subaction: "createOrder",
    fields: "Id,Name,EffectiveDate",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://st1728476136997.my.salesforce.com/services/apexrest/vlocity_cmt/v2/carts",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  let { data: result, status } = await axios.request(config);
  console.log({ result, status });
  return result?.totalSize > 0;
}
