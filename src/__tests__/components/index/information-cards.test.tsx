import { render } from "@testing-library/react";
import InformationCards from "@/components/index/information-cards";
import TermDates from "@/components/index/term-dates";

jest.mock("@/components/index/term-dates");
const mockTermDates = jest.mocked(TermDates);

describe("information cards", () => {
    it("renders the term dates", () => {
        render(<InformationCards />);

        expect(mockTermDates).toHaveBeenCalled();
    });
});
