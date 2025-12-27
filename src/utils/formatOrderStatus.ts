export const formatOrderStatus = (orderStatus: string) => {
  switch (orderStatus) {
    case "unprocessed":
      return {
        textOrder: "Order Received",
        classNameOrder: "bg-orange-100 text-orange-600 border-orange-200",
      };
    case "processing":
      return {
        textOrder: "Processing",
        classNameOrder: "bg-blue-100 text-blue-600 border-blue-200",
      };
    case "completed":
      return {
        textOrder: "Completed",
        classNameOrder: "bg-green-100 text-green-600 border-green-200",
      };
    default:
      return { textOrder: orderStatus, classNameOrder: "bg-gray-100 text-gray-600" };
  }
};
