import { Event, EventProps } from "../entities/Event";

type Override = Partial<EventProps>;

export function makeEvent(override: Override = {}) {
    return new Event({
        orderId: "1",
        driverId: "1",
        date: "2022-01-01T00:00:00.000Z",
        type: "delivery",
        ...override,
    });
}
