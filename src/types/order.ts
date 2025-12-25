export interface OrderItemDetail {
  productname: string;
  productprice: number;
  productquantity: number;
  productimage: string;
  product: string;
  _id: string;
}

export interface Order {
  _id: string;
  total: number;
  itemsdetail: OrderItemDetail[];
  user: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  status: "pending" | "success" | "failed";
  __v: number;
}
