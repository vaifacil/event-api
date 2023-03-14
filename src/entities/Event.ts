import { v4 } from "uuid";

import { Replace } from "../helpers/replace";

export type EventProps = {
    orderId: string;
    driverId: string;
    type: "delivery" | "collect" | "occurrence";
    date: string;
};

export class Event {
    private _id: string;
    private props: EventProps;

    constructor(props: Replace<EventProps, { date?: string }>, id?: string) {
        this._id = id ?? v4();
        this.props = {
            ...props,
            date: props.date ?? new Date().toISOString(),
        };
    }

    public get id(): string {
        return this._id;
    }

    public get driverId() {
        return this.props.driverId;
    }

    public get orderId() {
        return this.props.orderId;
    }

    public get date() {
        return this.props.date;
    }

    public get type() {
        return this.props.type;
    }
}
