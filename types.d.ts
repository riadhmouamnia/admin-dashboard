type UserDocument = {
    id: string,
    username: string,
    email: string,
    password: string,
    img: string,
    isActive: boolean,
    isAdmin: boolean,
    createdAt: string,
  }

  type SearchParams = {
   q: string | undefined
  }