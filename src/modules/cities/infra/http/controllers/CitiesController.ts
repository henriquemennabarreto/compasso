import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CityService from '@modules/cities/services/CityService';
import CreateCityService from '@modules/cities/services/CreateCityService';

export default class CitiesController {
  public async get(request: Request, response: Response): Promise<Response> {
    const name = request.query['name'];
    const state = request.query['state'];
    const cityService = container.resolve(CityService);
    const result = await cityService.execute({name, state});
    return response.json(classToClass(result));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, state } = request.body;
      const createCity = container.resolve(CreateCityService);
      const result = await createCity.execute({name, state});
      return response.status(201).json(classToClass(result));
    } catch (err) {
      console.error('[ERROR]', err.message);
      return response
        .status(400)
        .json({ message: 'create city has been failed' });
    }
  }
}
