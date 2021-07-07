import FakeCustomersRepository from '../repositories/fakes/FakeCustomersRepository';
import UpdateCustomerService from './UpdateCustomerService';

let fakeCustomersRepository: FakeCustomersRepository;
let updateCustomer: UpdateCustomerService;

describe('UpdateCustomer', () => {
  beforeEach(() => {
    fakeCustomersRepository = new FakeCustomersRepository();
    updateCustomer = new UpdateCustomerService(fakeCustomersRepository);
  });

  it('should be able to update a customer name', async () => {
    const customer = await fakeCustomersRepository.create({
      name: "antonia",
      gender: "female",
      birth: new Date(),
      age: "30",
      city_id: 1
    });
    const name = customer.name;
    await updateCustomer.execute(customer.id, {
      name: "henrique",
      gender: "female",
      birth: new Date(),
      age: "30",
      city_id: 1
    });
    const updatedCustomer = await fakeCustomersRepository.getById(customer.id);
    expect(updatedCustomer?.name).not.toEqual(name);
  });
});
