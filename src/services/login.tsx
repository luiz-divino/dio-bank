import api from "../services/api";

export const Login = async (
  email: string,
  password: string | number,
): Promise<Boolean> => {
  const data = await api();

  if (email === data.email && password === data.password) {
    return true;
  } else {
    return false;
  }
};
