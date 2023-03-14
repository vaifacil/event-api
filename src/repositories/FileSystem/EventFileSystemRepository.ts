import { readFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { DatabaseEvent } from "../../DTO";
import { Event } from "../../entities/Event";
import { EventnMapper } from "../../mappers/EventMapper";
import { IEventRepository } from "../IEventRepository";

class EventFileSystemRepository implements IEventRepository {
    private repository: Event[];

    constructor() {
        const database = readFileSync(
            `${__dirname}/../../../data/database.json`,
            {
                encoding: "utf-8",
            }
        );

        const eventsCollection = JSON.parse(database) as DatabaseEvent[];

        this.repository = eventsCollection.map((event) =>
            EventnMapper.toDomain(event)
        );
    }

    async create(event: Event): Promise<void> {
        this.repository.push(event);

        const newState = this.repository.map((event) =>
        EventnMapper.toDatabase(event)
    )

        await writeFile(
            `${__dirname}/../../../data/database.json`,
            JSON.stringify(newState)
        );
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

export { EventFileSystemRepository };
