import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CitiesController from '../controllers/CitiesController';

const citiesRouter = Router();
const citiesController = new CitiesController();

citiesRouter.use(ensureAuthenticated);

citiesRouter.get('/', citiesController.get);
citiesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      state: Joi.string(),
    },
  }),
  citiesController.create,
);

export default citiesRouter;
