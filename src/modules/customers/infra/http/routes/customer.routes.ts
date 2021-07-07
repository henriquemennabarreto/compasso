import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CustomerController from '../controllers/CustomerController';

const customerRouter = Router();
const customerController = new CustomerController();

customerRouter.use(ensureAuthenticated);

customerRouter.get('/', customerController.get);
customerRouter.get('/:id', customerController.getById);
customerRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      gender: Joi.string().required(),
      birth: Joi.date().required(),
      age: Joi.string().required(),
      city_id: Joi.number().required(),
    },
  }),
  customerController.create,
);

customerRouter.patch(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  customerController.update,
);

customerRouter.delete('/:id', customerController.delete);

export default customerRouter;
