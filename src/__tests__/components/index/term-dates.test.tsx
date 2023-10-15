import { render, screen } from "@testing-library/react";
import TermDates from "@/components/index/term-dates";
import * as datesService from "@/services/dates";

jest.mock("@/services/dates");
const mockDatesService = jest.mocked(datesService);

jest.mock("@/queries/index/use-term-dates", () => ({
    useTermDates: jest.fn().mockReturnValue({
        terms: [
            {
                id: "1",
                name: "Michaelmas",
                start: "2020-10-10",
                lastDayBeforeHalfTerm: "2020-11-11",
                firstDayAfterHalfTerm: "2020-11-21",
                end: "2020-12-16",
            },
        ],
    }),
}));

beforeEach(() => {
    jest.clearAllMocks();
});

describe("term dates", () => {
    it("renders the heading", () => {
        render(<TermDates />);

        const heading = screen.queryByRole("heading", { name: "Term dates" });

        expect(heading).toBeInTheDocument();
    });

    it("renders a term name", () => {
        render(<TermDates />);

        const termName = screen.queryByText("Michaelmas");

        expect(termName).toBeInTheDocument();
    });

    it("renders the term dates", () => {
        mockDatesService.formatDate
            .mockReturnValueOnce("Test Mon 10 Oct 2020")
            .mockReturnValueOnce("Test Fri 11 Nov 2020")
            .mockReturnValueOnce("Test Mon 21 Nov 2020")
            .mockReturnValueOnce("Test Fri 16 Dec 2020");

        render(<TermDates />);

        const firstHalf = screen.queryByText("Test Mon 10 Oct 2020 - Test Fri 11 Nov 2020");
        const secondHalf = screen.queryByText("Test Mon 21 Nov 2020 - Test Fri 16 Dec 2020");

        expect(firstHalf).toBeInTheDocument();
        expect(secondHalf).toBeInTheDocument();
    });
});
