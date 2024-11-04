export interface ILead {
  id: number;
  name: string;
  email: string;
  accepted: boolean;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
  };
  company: {
    name: string;
    catchPhrase: string;
  };
}
