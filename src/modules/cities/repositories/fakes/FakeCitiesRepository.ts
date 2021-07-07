import ICreateCityDTO from '../../dtos/ICreateCityDTO';
import City from '../../infra/typeorm/entities/City';
import ICitiesRepository from '../ICitiesRepository';

class FakeCitiesRepository implements ICitiesRepository {
  private cities: City[] = [];

  public async get(): Promise<City[]> {
    const cities = this.cities;
    return cities;
  }

  public async getByName(name: string): Promise<City | undefined> {
    const city = this.cities.find(c => c.name === name);
    return city;
  }

  public async getByState(state: string): Promise<City[] | undefined> {
    const cities = this.cities.filter(c => c.state === state);
    return cities;
  }

  public async create(data: ICreateCityDTO): Promise<City> {
    const city = new City();

    Object.assign(city, { id: 1 }, data);

    this.cities.push(city);

    return city;
  }
}

export default FakeCitiesRepository;
