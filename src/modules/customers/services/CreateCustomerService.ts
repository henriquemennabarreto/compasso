import AppError from '@shared/errors/AppError';
import { inject, injectable, container } from 'tsyringe';
import Customer from '../infra/typeorm/entities/Customer';
import ICustomersRepository from '../repositories/ICustomersRepository';

interface IRequest {
  name: string;
  gender: string;
  birth: Date;
  age: string;
  city_id: number;
}

@injectable()
class CreateCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository
  ) {}

  public async execute({ gender, name, age, birth, city_id }: IRequest): Promise<Customer> {
    if (name === "") throw new AppError('name is empty.');
    const customer = await this.customersRepository.create({ gender, name, age, birth, city_id });
    return customer;
  }

}

export default CreateCustomerService;
