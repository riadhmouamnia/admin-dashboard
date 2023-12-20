type UserDocument = {
  id: string;
  username: string;
  email: string;
  phone: string;
  address: string;
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
  price: number;
  size: string;
  color: string;
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

type UserUpdateFields = {
  username: FormDataEntryValue;
  email: FormDataEntryValue;
  password: string;
  phone: FormDataEntryValue;
  address: FormDataEntryValue;
  isAdmin: boolean;
  isActive: boolean;
};

type ProductUpdateFields = {
  title: FormDataEntryValue;
  desc: FormDataEntryValue;
  price: FormDataEntryValue;
  stock: FormDataEntryValue;
  color: FormDataEntryValue;
  size: FormDataEntryValue;
};
