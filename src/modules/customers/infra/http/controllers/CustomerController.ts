import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CustomerService from '@modules/customers/services/CustomerService';
import CreateCustomerService from '@modules/customers/services/CreateCustomerService';
import UpdateCustomerService from '@modules/customers/services/UpdateCustomerService';
import DeleteCustomerService from '@modules/customers/services/DeleteCustomerService';

export default class CustomerController {
  public async get(request: Request, response: Response): Promise<Response> {
    const name = request.query.name;
    const customerService = container.resolve(CustomerService);
    const result = await customerService.get(name);
    return response.json(classToClass(result));
  }

  public async getById(request: Request, response: Response): Promise<Response> {
    try {
      const customerService = container.resolve(CustomerService);
      const result = await customerService.getById(+request.params.id);
      return response.json(classToClass(result));
    } catch (err) {
      console.error('[ERROR]', err.message);
      return response
        .status(404)
        .json({ message: 'user not found' });
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const createCustomerService = container.resolve(CreateCustomerService);
      const result = await createCustomerService.execute(request.body);
      return response.status(201).json(classToClass(result));
    } catch (err) {
      console.error('[ERROR]', err.message);
      return response
        .status(400)
        .json({ message: 'create customer has been failed' });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const updateCustomerService = container.resolve(UpdateCustomerService);
      const result = await updateCustomerService.execute(+request.params.id, request.body);
      return response.json(classToClass(result));
    } catch (err) {
      console.error('[ERROR]', err.message);
      return response
        .status(400)
        .json({ message: 'update customer has been failed' });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const deleteCustomerService = container.resolve(DeleteCustomerService);
      const result = await deleteCustomerService.execute(+request.params.id);
      return response.status(204).json(classToClass(result));
    } catch (err) {
      console.error('[ERROR]', err.message);
      return response
        .status(400)
        .json({ message: 'delete customer has been failed' });
    }
  }
}
