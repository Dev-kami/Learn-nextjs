type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
  };
  phone: number;
};

type Posts = {
  id: number;
  title: string;
  body: string;
};
