import { Router } from "express";

import { CreateEventController } from "./controller/CreateEventController";
import { FindDriverEventsController } from "./controller/GetDriverEventsController";
import { FindEventByIdController } from "./controller/GetEventByIdController";

const router = Router();

const createEventController = new CreateEventController();
const findEventByIdController = new FindEventByIdController();
const findDriverEventsController = new FindDriverEventsController();

router.post("/event/", createEventController.handler);

router.get("/event/:id", findEventByIdController.handler);

router.get("/event/driver/:id", findDriverEventsController.handler);

export { router };
