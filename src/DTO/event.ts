export type EventDTO = {
    orderId: string;
    driverId: string;
    type: "delivery" | "collect" | "occurrence";
};

export type DatabaseEvent = {
    id: string;
    orderId: string;
    driverId: string;
    type: "delivery" | "collect" | "occurrence";
    date: string;
};
