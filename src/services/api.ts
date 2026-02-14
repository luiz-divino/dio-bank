interface User {
  id: number;
  nome: string;
  email: string;
  password: string | number;
  balance: number;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = async (): Promise<User> => {
  await delay(2000);
  const user: User = {
    id: 1,
    nome: "luiz",
    email: "luiz@teste.com",
    password: "123",
    balance: 1000,
  };
  return user;
};

export default api;
