import { DatabaseEvent } from "../../DTO";
import { Event } from "../../entities/Event";
import { EventnMapper } from "../../mappers/EventMapper";
import { IEventRepository } from "../IEventRepository";

class EventInMemoryRepository implements IEventRepository {
    private repository: Event[];

    constructor() {
        const eventsCollection = [] as DatabaseEvent[];

        this.repository = eventsCollection.map((event) =>
            EventnMapper.toDomain(event)
        );
    }

    async create(event: Event): Promise<void> {
        this.repository.push(event);
    }

    findById(id: string) {
        const event = this.repository.find((item) => item.id === id);

        if (!event) return null;

        return EventnMapper.toDatabase(event);
    }

    findDriverEvents(driverId: string, from: string, to: string) {
        const driverEvents = this.repository.filter((item) => {
            return String(item.driverId) === driverId;
        });

        const dateFrom = new Date(
            Number(from.substring(6, 10)),
            Number(from.substring(3, 5)),
            Number(from.substring(0, 2))
        );

        const dateTo = new Date(
            Number(to.substring(6, 10)),
            Number(to.substring(3, 5)),
            Number(from.substring(0, 2))
        );

        const filterByPeriod = driverEvents.filter(
            (event) =>
                new Date(event.date) >= dateFrom &&
                new Date(event.date) <= dateTo
        );

        return filterByPeriod.map((event) => EventnMapper.toDatabase(event));
    }
}

export { EventInMemoryRepository };
