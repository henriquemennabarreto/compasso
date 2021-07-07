import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import ICitiesRepository from '@modules/cities/repositories/ICitiesRepository';
import CitiesRepository from '@modules/cities/repositories/CitiesRepository';

import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import CustomersRepository from '@modules/customers/repositories/CustomersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<ICitiesRepository>(
  'CitiesRepository',
  CitiesRepository,
);

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);
