import { ILead } from '../_interfaces/ILead';

export class Lead implements ILead {
  id: number;
  name: string;
  email: string;
  accepted: boolean = false;
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
