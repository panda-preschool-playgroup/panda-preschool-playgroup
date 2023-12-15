import { render, screen } from "@testing-library/react";
import Event from "@/components/index/event";
import * as datesService from "@/services/dates";

jest.mock("@/services/dates");
const mockDatesService = jest.mocked(datesService);

beforeEach(() => {
    jest.clearAllMocks();
});

describe("event", () => {
    it("renders the name", () => {
        render(<Event name={"Event one"} date={"2020-01-01"} />);

        const name = screen.queryByText("Event one");

        expect(name).toBeInTheDocument();
    });

    it("renders the formatted date", () => {
        mockDatesService.formatDate.mockReturnValueOnce("Test Wed 1 Jan 2020");

        render(<Event name={"Event one"} date={"2020-01-01"} />);

        expect(mockDatesService.formatDate).toHaveBeenCalled();

        const date = screen.queryByText("Test Wed 1 Jan 2020");

        expect(date).toBeInTheDocument();
    });

    it("renders the link", () => {
        mockDatesService.formatDate.mockReturnValueOnce("Test Wed 1 Jan 2020");

        render(<Event name={"Event one"} date={"2020-01-01"} href="http://localhost:8000/event" />);

        const url = screen.queryByRole("link", { name: "Event one Test Wed 1 Jan 2020" });

        expect(url).toBeInTheDocument();
    });

    it("renders text when the date is in the past", () => {
        mockDatesService.formatDate.mockReturnValueOnce("Test Wed 1 Jan 2020");
        mockDatesService.dateIsInThePast.mockReturnValueOnce(true);

        render(<Event name={"Event one"} date={"2020-01-01"} href="http://localhost:8000/event" />);

        const url = screen.queryByRole("link");
        const text = screen.queryByText("Test Wed 1 Jan 2020");

        expect(url).not.toBeInTheDocument();
        expect(text).toBeInTheDocument();
    });
});
