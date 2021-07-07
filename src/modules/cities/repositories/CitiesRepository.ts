import { getRepository, Repository } from 'typeorm';

import ICitiesRepository from '@modules/cities/repositories/ICitiesRepository';
import ICreateCityDTO from '@modules/cities/dtos/ICreateCityDTO';

import City from '../infra/typeorm/entities/City';

class CitiesRepository implements ICitiesRepository {
  private ormRepository: Repository<City>;

  constructor() {
    this.ormRepository = getRepository(City);
  }

  public async get(): Promise<City[]> {
    const cities = this.ormRepository.find();
    return cities;
  }

  public async getByName(name: string): Promise<City | undefined> {
    return this.ormRepository.findOne({ where: { name }});
  }

  public async getByState(state: string): Promise<City[] | undefined> {
    return this.ormRepository.find({ where: { state }});
  }

  public async create(data: ICreateCityDTO): Promise<City> {
    const city = this.ormRepository.create(data);
    await this.ormRepository.save(city);
    return city;
  }

  public async save(city: City): Promise<City> {
    return this.ormRepository.save(city);
  }
}

export default CitiesRepository;
