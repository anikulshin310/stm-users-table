export interface IRandomUser {
  login: {
    uuid: string;
  };
  name: {
    first: string;
    last: string;
  };
  location: {
    state: string;
    city: string;
  };
  email: string;
  phone: string;
  registered: {
    date: string;
  };
  picture: {
    large: string;
    thumbnail: string;
  };
}
export interface IData {
  results: IRandomUser[];
}
