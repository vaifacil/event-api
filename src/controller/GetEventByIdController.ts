import { Request, Response } from "express";

import { EventFileSystemRepository } from "../repositories/FileSystem/EventFileSystemRepository";

export class FindEventByIdController {
    async handler(request: Request, response: Response) {
        const { id } = request.params;

        const eventRepository = new EventFileSystemRepository();

        const event = eventRepository.findById(id);

        if (!event) {
            return response.status(404).json({
                error: "Event not found",
            });
        }

        return response.status(200).json(event);
    }
}
