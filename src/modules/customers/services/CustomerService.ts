import { inject, injectable } from 'tsyringe';
import Customer from '../infra/typeorm/entities/Customer';
import ICustomersRepository from '../repositories/ICustomersRepository';

@injectable()
class CustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async get(name: any): Promise<Customer[] | Customer | undefined> {
    let customers;
    customers = await this.customersRepository.get();
    if (name) customers = await this.customersRepository.getByName(name);
    return customers;
  }

  public async getById(id: number): Promise<Customer | undefined> {
    const customer = await this.customersRepository.getById(id);
    if (!customer) throw new Error('user not found');
    return customer;
  }
}

export default CustomerService;
