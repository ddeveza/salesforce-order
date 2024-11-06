import { api } from "@/lib/axios";

export async function getOrdersConsumerType() {
  const query = "SELECT Id, Name, Status, AccountId, EffectiveDate,OrderNumber FROM Order WHERE RecordTypeId = '012Hs000001msx7IAA'"; //RecordTypId =012Hs000001msx7IAA this Id is for Order-Consumer
  try {
    const { data } = await api.get("data/v56.0/query/", {
      params: {
        q: query,
      },
    });
    return data.records;
  } catch (error) {
    console.log({ error });
  }
}

export async function getProductsByCartId(cartId: string) {
  try {
    const { data } = await api.get(`apexrest/vlocity_cmt/v2/cpq/carts/${cartId}/products`);
    return data.records;
  } catch (error) {
    console.log({ error });
  }
}

export async function createCart() {}
