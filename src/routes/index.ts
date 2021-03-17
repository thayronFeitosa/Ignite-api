import { Router } from 'express';
import { categoriesRoute } from '../routes/categories.routes';
import { specificationsRouter } from '../routes/espeficitations.routes';

const router = Router();

router.use("/categories", categoriesRoute)
router.use("/specification", specificationsRouter)
export { router };
