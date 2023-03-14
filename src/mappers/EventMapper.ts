import { DatabaseEvent } from "../DTO";
import { Event } from "../entities/Event";

export class EventnMapper {
    static toDatabase({ date, driverId, id, orderId, type }: Event) {
        return {
            id,
            driverId,
            orderId,
            type,
            date,
        };
    }

    static toDomain({
        date,
        driverId,
        id,
        orderId,
        type,
    }: DatabaseEvent): Event {
        return new Event(
            {
                date,
                driverId,
                orderId,
                type,
            },
            id
        );
    }
}
