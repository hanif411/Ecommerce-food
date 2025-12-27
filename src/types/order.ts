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
  paymentStatus: "pending" | "success" | "failed";
  orderStatus: "unprocessed" | "processing" | "completed" | "cancelled";
  createdAt: string;
  updatedAt: string;
  __v: number;
}
