import { api } from "@/lib/axios";
interface Order {
  Id: string;
  Name: string;
  EffectiveDate: string;
  OrderNumber: string;
}

export async function getOrdersConsumerType() {
  const query = "SELECT Id, Name, EffectiveDate,OrderNumber FROM Order WHERE RecordTypeId = '012Hs000001msx7IAA'"; //RecordTypId =012Hs000001msx7IAA this Id is for Order-Consumer
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
    return data.records.map((product: any) => ({
      name: product.name,
      value: product.UnitPrice.value,
      id: product.productId,
    }));
  } catch (error) {
    console.log({ error });
  }
}

export async function createCart() {}
