import { render, screen } from "@testing-library/react";
import Events from "@/components/index/events";
import * as useEventsQuery from "@/queries/index/use-events";
import { createMockContentfulEntry, createMockContentfulEvent } from "@/test/fixtures";
import Event from "@/components/index/event";

jest.mock("@/components/index/event");
const mockEvent = jest.mocked(Event);

jest.mock("@/queries/index/use-events", () => ({
    useEvents: jest.fn(),
}));
const mockEventsQuery = jest.mocked(useEventsQuery);

beforeEach(() => {
    jest.clearAllMocks();
});

describe("events", () => {
    it("renders the heading", () => {
        render(<Events />);

        const heading = screen.queryByRole("heading", { name: "Events" });

        expect(heading).toBeInTheDocument();
    });

    it("renders an event", () => {
        mockEventsQuery.useEvents.mockReturnValueOnce({
            ...createMockContentfulEntry(),
            name: "",
            events: [
                createMockContentfulEvent({
                    name: "Event one",
                    date: "2020-01-01",
                    url: "http://localhost:8000/event",
                }),
            ],
        });

        render(<Events />);

        expect(mockEvent).toHaveBeenCalledOnce();

        expect(mockEvent.mock.calls[0][0].name).toEqual("Event one");
        expect(mockEvent.mock.calls[0][0].date).toEqual("2020-01-01");
        expect(mockEvent.mock.calls[0][0].url).toEqual("http://localhost:8000/event");
    });

    it("renders multiple events", () => {
        mockEventsQuery.useEvents.mockReturnValueOnce({
            ...createMockContentfulEntry(),
            name: "",
            events: [
                createMockContentfulEvent({ id: "1", name: "Event one" }),
                createMockContentfulEvent({ id: "2", name: "Event two" }),
                createMockContentfulEvent({ id: "3", name: "Event three" }),
            ],
        });

        render(<Events />);

        expect(mockEvent).toHaveBeenCalledTimes(3);
    });

    it("renders a message when there are no events", () => {
        mockEventsQuery.useEvents.mockReturnValueOnce({
            ...createMockContentfulEntry(),
            name: "",
            events: [],
        });

        render(<Events />);

        const message = screen.queryByText("Check back soon!");

        expect(message).toBeInTheDocument();
    });
});
