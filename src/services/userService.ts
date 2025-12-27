const BASEURL = "https://be-ecommerce-navy.vercel.app/api/v1";

export const userService = {
  login: async (formData: any) => {
    const response = await fetch(`${BASEURL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("gagal login");
    }
    return data.data;
  },
  logout: async () => {
    const response = await fetch(`${BASEURL}/auth/logout`, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("gagal login");
    }
    return data;
  },
  getUser: async () => {
    const response = await fetch(`${BASEURL}/auth/getuser`, {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("gagal get user");
    }
    return data.data;
  },
};
