import City from '../infra/typeorm/entities/City';
import ICreateCityDTO from '../dtos/ICreateCityDTO';

export default interface ICitiesRepository {
  get(): Promise<City[]>;
  getByName(name: string): Promise<City | undefined>;
  getByState(state: string): Promise<City[] | undefined>;
  create(data: ICreateCityDTO): Promise<City>;
}
