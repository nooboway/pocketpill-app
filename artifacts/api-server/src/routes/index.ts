import { Router, type IRouter } from "express";
import healthRouter from "./health";
import settingsRouter from "./settings";
import newsletterRouter from "./newsletter";
import bookingsRouter from "./bookings";
import leadsRouter from "./leads";
import productsRouter from "./products";
import checkoutRouter from "./checkout";

const router: IRouter = Router();

router.use(healthRouter);
router.use(settingsRouter);
router.use(newsletterRouter);
router.use(bookingsRouter);
router.use(leadsRouter);
router.use(productsRouter);
router.use(checkoutRouter);

export default router;
