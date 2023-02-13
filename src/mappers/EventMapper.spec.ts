import { v4 } from "uuid";

import { Event } from "../entities/Event";
import { EventnMapper } from "./EventMapper";

describe("EventnMapper", () => {
    it("should be able to map database data to domain data", () => {
        const data = EventnMapper.toDomain({
            id: v4(),
            driverId: "1",
            orderId: "1",
            type: "delivery",
            date: new Date().toISOString(),
        });

        expect(data).toBeTruthy();
    });

    it("should be able to map domain data to database data", () => {
        const event = new Event({
            driverId: "1",
            orderId: "1",
            type: "delivery",
            date: new Date().toISOString(),
        });

        const data = EventnMapper.toDatabase(event);

        expect(data).toBeTruthy();
    });
});
