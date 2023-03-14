import { Request, Response } from "express";

import { EventFileSystemRepository } from "../repositories/FileSystem/EventFileSystemRepository";

export class FindDriverEventsController {
    async handler(request: Request, response: Response) {
        const { id: driverId } = request.params;
        const { from, to } = request.body;

        if (!from || !to) {
            return response.status(400).json({
                error: "date range not found or invalid",
            });
        }

        const eventRepository = new EventFileSystemRepository();

        const events = eventRepository.findDriverEvents(driverId, from, to);

        return response.status(200).json(events);
    }
}
