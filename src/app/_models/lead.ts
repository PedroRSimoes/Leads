import { ILead } from '../_interfaces/ILead';

export class Lead implements ILead {
  id: number;
  name: string;
  username: string;
  email: string;
  accepted: boolean = false;
  street: string;
}
