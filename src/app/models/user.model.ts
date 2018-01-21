import { Company } from './company.model';
import { Address } from "./address.model";

export class User{

  id: number;
  name: string;
  email: string;
  address: Address;
  company: Company;

}
