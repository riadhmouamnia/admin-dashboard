type UserDocument = {
  id: string;
  username: string;
  email: string;
  password: string;
  img: string;
  isActive: boolean;
  isAdmin: boolean;
  createdAt: string;
};
type ProductDocument = {
  id: string;
  title: string;
  desc: string;
  price: string;
  img: string;
  stock: number;
  createdAt: string;
};

type SearchParams = {
  q: string | undefined;
  page: string | undefined;
};
type Params = {
  id: string;
};
