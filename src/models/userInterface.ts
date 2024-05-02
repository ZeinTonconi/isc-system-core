interface User {
  id?: number;
  username: string;
  name: string;
  lastname: string;
  mothername: string;
  password: string;
  email: string;
  roles?: string[];
}

export default User;
