import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import City from '../infra/typeorm/entities/City';
import ICitiesRepository from '../repositories/ICitiesRepository';

interface IRequest {
  name: string;
  state: string;
}

@injectable()
class CreateCityService {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  public async execute({ name, state }: IRequest): Promise<City> {
    const checkCityExists = await this.citiesRepository.getByName(name);
    if (checkCityExists) {
      throw new AppError('city already exists.');
    }
    const city = await this.citiesRepository.create({ name, state});
    return city;
  }

}

export default CreateCityService;
