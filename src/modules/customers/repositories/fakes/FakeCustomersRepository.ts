import ICustomersRepository from '../ICustomersRepository';
import ICreateCustomer from '../../dtos/ICreateCustomer';
import Customer from '../../infra/typeorm/entities/Customer';
import { now } from 'moment';

class FakeCustomersRepository implements ICustomersRepository {
  private customers: Customer[] = [];

  public async getById(id: number): Promise<Customer | undefined> {
    const customer = this.customers.find(customer => customer.id === id);
    return customer;
  }

  public async getByName(name: string): Promise<Customer | undefined> {
    const customer = this.customers.find(customer => customer.name === name);
    return customer;
  }

  public async get(): Promise<Customer[]> {
    let { customers } = this;
    return customers;
  }

  public async create(data: ICreateCustomer): Promise<Customer> {
    const customer = new Customer();

    Object.assign(customer, { id: 1 }, data);

    this.customers.push(customer);

    return customer;
  }

  public async update(id:number, data: ICreateCustomer): Promise<Customer> {
    const findIndex = this.customers.findIndex(customer => customer.id === id);

    const customer = this.customers[findIndex];

    customer.name = data.name;
    customer.gender = data.gender;
    customer.birth = data.birth;
    customer.age = data.age;
    customer.city_id = data.city_id;

    return customer;
  }

  public async delete(id: number): Promise<void> {
    const findIndex = this.customers.findIndex(customer => customer.id === id);
    this.customers[findIndex].deleted_at = new Date();
  }
}

export default FakeCustomersRepository;
