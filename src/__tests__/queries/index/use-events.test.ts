import { useEvents } from "@/queries/index/use-events";

jest.mock("gatsby", () => ({
    useStaticQuery: jest.fn().mockReturnValue({
        contentfulEvents: {
            events: [
                {
                    name: "Event one",
                },
                {
                    name: "Event two",
                },
            ],
        },
    }),
    graphql: jest.fn(),
}));

describe("useEvents", () => {
    it("returns events", () => {
        const events: Queries.ContentfulEvents = useEvents();

        expect(events.events).toHaveLength(2);

        expect(events.events?.at(0)?.name).toEqual("Event one");
        expect(events.events?.at(1)?.name).toEqual("Event two");
    });
});
