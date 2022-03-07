export type AuthPayload = {
  email: string;
  password: string;
};

export type UserDTO = {
  name: string;
  id: string;
  createdAt?: string;
};
