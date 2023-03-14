import { Request, Response } from "express";

import { Event } from "../entities/Event";
import { EventFileSystemRepository } from "../repositories/FileSystem/EventFileSystemRepository";

export class CreateEventController {
    async handler(request: Request, response: Response) {
        const { driverId, orderId, type } = request.body;

        const eventRepository = new EventFileSystemRepository();

        const event = new Event({ driverId, orderId, type });

        await eventRepository.create(event);

        return response.status(201).send();
    }
}
