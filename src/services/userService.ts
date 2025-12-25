const BASEURL = "http://localhost:3000/api/v1";

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
    const response = await fetch(`${BASEURL}/auth/logout`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("gagal login");
    }
    return data;
  },
};
