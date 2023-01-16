export type Auth = {
  username : string,
  password :string ,
}
export type AuthResponse = {
  token: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};
