export interface IUsers {
  login: string;
  avatar_url: string;
  url: string;
}

export interface IUser {
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  updated_at: string;
}
