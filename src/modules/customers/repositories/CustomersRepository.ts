import { getRepository, Repository } from 'typeorm';

import ICustomersRepository from './ICustomersRepository';
import ICreateCustomer from '../dtos/ICreateCustomer';

import Customer from '../infra/typeorm/entities/Customer';
import moment from 'moment';

class CustomersRepository implements ICustomersRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  public async get(): Promise<Customer[]> {
    return this.ormRepository.find();
  }

  public async getByName(name: string): Promise<Customer | undefined> {
    return this.ormRepository.findOne({ where: { name }});
  }

  public async getById(id: number): Promise<Customer | undefined> {
    return this.ormRepository.findOne({ where: { id }});
  }

  public async create(data: ICreateCustomer): Promise<Customer> {
    const customer = this.ormRepository.create(data);
    await this.ormRepository.save(customer);
    return customer;
  }

  public async update(id: number, data: ICreateCustomer): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne(id);
    if (!customer) throw new Error('customer not found');

    customer.gender = data.gender;
    customer.name = data.name;
    customer.age = data.age;
    customer.birth = data.birth;
    customer.city_id = data.city_id;
    await this.ormRepository.save(customer);

    return customer;
  }

  public async delete(id: number): Promise<void> {
    const customer = await this.ormRepository.findOne(id);
    if (!customer) throw new Error('customer not found');

    customer.deleted_at = moment().toDate();
    await this.ormRepository.save(customer);
  }

  public async save(customer: Customer): Promise<Customer> {
    return await this.ormRepository.save(customer);
  }
}

export default CustomersRepository;
