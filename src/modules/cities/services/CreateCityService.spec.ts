import AppError from '@shared/errors/AppError';

import FakeCitiesRepository from '../repositories/fakes/FakeCitiesRepository';
import CreateCityService from './CreateCityService';

let fakeCitiesRepository: FakeCitiesRepository;
let createCity: CreateCityService;

describe('CreateCity', () => {
  beforeEach(() => {
    fakeCitiesRepository = new FakeCitiesRepository();
    createCity = new CreateCityService(fakeCitiesRepository);
  });

  it('should be able to create a new city', async () => {
    const city = await fakeCitiesRepository.create({
      name: 'Porto Alegre',
      state: 'RS',
    });

    expect(city).toHaveProperty('id');
  });

  it('should not be able to create a duplicated city', async () => {
    await createCity.execute({
      name: 'Porto Alegre',
      state: 'RS',
    });

    await expect(
      createCity.execute({
        name: 'Porto Alegre',
        state: 'RS',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
