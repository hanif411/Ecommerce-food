export const formatDate = (date: string) => {
  const paymentDate = new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const paymentHour = new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return { paymentDate, paymentHour };
};
