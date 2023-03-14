import { makeEvent } from "../factories/EventFactory";
import { EventInMemoryRepository } from "./InMemory/EventInMemoryRepository";

describe("EventRepository", () => {
    const inMemoryRepository = new EventInMemoryRepository();

    it("should be able to persist a new event", async () => {
        const fakeEvent = makeEvent();

        await inMemoryRepository.create(fakeEvent);

        expect(inMemoryRepository.findById(fakeEvent.id)).toBeTruthy();
    });

    it("should be able to find a event by its ID", async () => {
        const fakeEvent = makeEvent();

        await inMemoryRepository.create(fakeEvent);

        expect(inMemoryRepository.findById(fakeEvent.id)).toBeTruthy();
    });

    it("should be able to find all events of a driver in a given period", async () => {
        const driverId = "99";
        const date = "2022-02-01T00:00:00.000Z";

        const fakeEvent = makeEvent({ driverId, date });

        await inMemoryRepository.create(fakeEvent);
        await inMemoryRepository.create(fakeEvent);

        const from = "01-02-2022";
        const to = "28-02-2022";

        expect(
            inMemoryRepository.findDriverEvents(driverId, from, to)
        ).toBeTruthy();
    });
});
