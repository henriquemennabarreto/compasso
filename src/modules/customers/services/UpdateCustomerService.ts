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
class UpdateCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository
  ) {}

  public async execute(id: number, { gender, name, age, birth, city_id }: IRequest): Promise<Customer | undefined> {
    const lead = await this.customersRepository.update(id, { gender, name, age, birth, city_id });
    return lead;
  }


}

export default UpdateCustomerService;
