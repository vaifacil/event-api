import { Event } from "./Event";

describe("Event", () => {
    it("should be able to create a event", () => {
        const event = new Event({
            driverId: "1",
            orderId: "1",
            type: "delivery",
            date: new Date().toISOString(),
        });

        expect(event).toBeTruthy();
    });
});
