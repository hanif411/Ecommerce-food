
export const formatPaymentStatus = (paymentStatus: string) => {
  switch (paymentStatus) {
    case "success": {
      return {
        textPayment: "Success Payment",
        classNamePayment: "text-green-500 bg-green-50",
      };
    }
    case "pending": {
      return {
        textPayment: "Pending Payment",
        classNamePayment: "text-amber-500 bg-amber-50",
      };
    }
    case "failed": {
      return { textPayment: "Failed Payment", classNamePayment: "text-red-500 bg-red-50" };
    }
    default: {
      return { textPayment: paymentStatus, classNamePayment: "text-gray-500 bg-gray-50" };
    }
  }
};
