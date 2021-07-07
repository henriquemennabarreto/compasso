import Customer from '../infra/typeorm/entities/Customer';
import ICreateCustomer from '../dtos/ICreateCustomer';

export default interface ICustomerRepository {
  get(): Promise<Customer[] | undefined>;
  getByName(name: string): Promise<Customer | undefined>;
  getById(id: number): Promise<Customer | undefined>;
  create(data: ICreateCustomer): Promise<Customer>;
  update(id: number, data: ICreateCustomer): Promise<Customer | undefined>;
  delete(id: number): Promise<void>;
}
