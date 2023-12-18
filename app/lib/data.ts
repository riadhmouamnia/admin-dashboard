import { Product, User } from "./models";
import { connectToDB } from "./utils";

interface FetchUsersResult {
  users: UserDocument[];
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