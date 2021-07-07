import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import citiesRouter from '@modules/cities/infra/http/routes/cities.routes';
import customersRouter from '@modules/customers/infra/http/routes/customer.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/cities', citiesRouter);
routes.use('/customers', customersRouter);

export default routes;
