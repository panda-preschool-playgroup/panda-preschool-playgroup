import { render, screen } from "@testing-library/react";
import TermDates from "@/components/index/term-dates";

jest.mock("@/queries/index/use-term-dates", () => ({
    useTermDates: jest.fn().mockReturnValue({
        academicYear: "2020/21",
        terms: [
            {
                id: "1",
                name: "Michaelmas",
                firstHalf: "Mon 10th Oct - Fri 11th Nov",
                secondHalf: "Mon 21st Nov Oct - Fri 16th Dec",
            },
        ],
    }),
}));

beforeEach(() => {
    jest.clearAllMocks();
});

describe("term dates", () => {
    it("renders the academic year", () => {
        render(<TermDates />);

        const heading = screen.queryByRole("heading", { name: "Term dates 2020/21" });

        expect(heading).toBeInTheDocument();
    });

    it("renders a term name", () => {
        render(<TermDates />);

        const termName = screen.queryByText("Michaelmas");

        expect(termName).toBeInTheDocument();
    });

    it("renders the term dates", () => {
        render(<TermDates />);

        const firstHalf = screen.queryByText("Mon 10th Oct - Fri 11th Nov");
        const secondHalf = screen.queryByText("Mon 21st Nov Oct - Fri 16th Dec");

        expect(firstHalf).toBeInTheDocument();
        expect(secondHalf).toBeInTheDocument();
    });
});
