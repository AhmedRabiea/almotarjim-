import { api } from "./api";

const login = async (email: string, password: string) => {
  const res = await api.post("/login", {
    email,
    password,
  });
  return res.data;
};
const register = async (
  name: string,
  email: string,
  phone: string,
  password: string
) => {
  const res = await api.post("/register/client", {
    name,
    email,
    phone,
    password,
    role: "client",
  });

  return res.data;
};

const getUser = async () => {
  const res = await api.get("/users/profile/me");
  return res.data;
};

const AuthService = {
  login,
  register,
  getUser,
};

export default AuthService;
