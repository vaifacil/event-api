import { DatabaseEvent } from "../DTO";
import { Event } from "../entities/Event";

export type IEventRepository = {
    create(event: Event): Promise<void>;
    findById(id: string): DatabaseEvent | null;
    findDriverEvents(
        driverId: string,
        from: string,
        to: string
    ): DatabaseEvent[];
};
