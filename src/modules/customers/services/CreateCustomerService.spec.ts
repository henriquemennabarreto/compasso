import FakeCustomersRepository from '../repositories/fakes/FakeCustomersRepository';
import CreateCustomerService from './CreateCustomerService';

let fakeCustomersRepository: FakeCustomersRepository;
let createCustomer: CreateCustomerService;

describe('CreateCustomer', () => {
  beforeEach(() => {
    fakeCustomersRepository = new FakeCustomersRepository();
    createCustomer = new CreateCustomerService(fakeCustomersRepository);
  });

  it('should be able to create a new customer', async () => {
    const customer = await fakeCustomersRepository.create({
      name: "antonia",
    	gender: "female",
    	birth: new Date(),
    	age: "30",
	    city_id: 1
    });

    expect(customer).toHaveProperty('id');
  });
});
