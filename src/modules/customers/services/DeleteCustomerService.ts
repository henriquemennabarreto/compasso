import { inject, injectable, container } from 'tsyringe';
import ICustomersRepository from '../repositories/ICustomersRepository';

@injectable()
class DeleteCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository
  ) {}

  public async execute(id: number): Promise<void> {
    await this.customersRepository.delete(id);
  }
}

export default DeleteCustomerService;
