import { inject, injectable } from 'tsyringe';
import City from '../infra/typeorm/entities/City';
import ICitiesRepository from '../repositories/ICitiesRepository';

interface IRequest {
  name: any;
  state: any;
}

@injectable()
class CityService {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  public async execute({ name, state }: IRequest): Promise<City[] | City | undefined> {
    let cities;
    cities = await this.citiesRepository.get();
    if (state) cities = await this.citiesRepository.getByState(state);
    if (name) cities = await this.citiesRepository.getByName(name);
    return cities;
  }
}

export default CityService;
