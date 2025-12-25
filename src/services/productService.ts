const BASEURL = "http://localhost:3000/api/v1";

export const productServices = {
  getAll: async () => {
    const response = await fetch(`${BASEURL}/product`);
    const data = await response.json();
    return data.data;
  },
  getById: async (id: string) => {
    const response = await fetch(`${BASEURL}/product/${id}`);
    const data = await response.json();
    return data.data;
  },
};
