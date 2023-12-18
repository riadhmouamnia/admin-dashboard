import { Product, User } from "./models";
import { connectToDB } from "./utils";

interface FetchUsersResult {
  users: UserDocument[];
  count: number;
}
interface FetchProductsResult {
  products: ProductDocument[];
  count: number;
}

export const fetchUsers = async (q: string, page: string, limit: number): Promise<FetchUsersResult> => {
  const regex = new RegExp(q, "i")
  const CURRENT_PAGE = Number(page);

  try {
    connectToDB();
    const count = await User.countDocuments({ username: { $regex: regex } });
    const users = await User.find({username: { $regex: regex}}).limit(limit).skip(limit * (CURRENT_PAGE -1 ))
    return  {users, count} ;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};


export const fetchProducts = async (q: string, page: string, limit: number): Promise<FetchProductsResult> => {
  const regex = new RegExp(q, "i")
  const CURRENT_PAGE = Number(page);

  try {
    connectToDB();
    const count = await Product.countDocuments({ title: { $regex: regex } });
    const products = await Product.find({title: { $regex: regex}}).limit(limit).skip(limit * (CURRENT_PAGE -1 ))
    return  {products, count} ;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};