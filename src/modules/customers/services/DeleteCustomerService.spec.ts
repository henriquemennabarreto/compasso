import FakeCustomersRepository from '../repositories/fakes/FakeCustomersRepository';
import DeleteCustomerService from './DeleteCustomerService';

let fakeCustomersRepository: FakeCustomersRepository;
let deleteCustomer: DeleteCustomerService;

describe('DeleteCustomer', () => {
  beforeEach(() => {
    fakeCustomersRepository = new FakeCustomersRepository();
    deleteCustomer = new DeleteCustomerService(fakeCustomersRepository);
  });

  it('should be able to delete a customer', async () => {
    const customer = await fakeCustomersRepository.create({
      name: "antonia",
    	gender: "female",
    	birth: new Date(),
    	age: "30",
	    city_id: 1
    });
    await fakeCustomersRepository.delete(customer.id);
    const deletedCustomer = await fakeCustomersRepository.getById(customer.id);
    expect(deletedCustomer?.deleted_at).not.toBeUndefined();
  });
});
