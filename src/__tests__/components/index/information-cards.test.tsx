import { render } from "@testing-library/react";
import InformationCards from "@/components/index/information-cards";
import TermDates from "@/components/index/term-dates";
import Events from "@/components/index/events";

jest.mock("@/components/index/term-dates");
const mockTermDates = jest.mocked(TermDates);

jest.mock("@/components/index/events");
const mockEvents = jest.mocked(Events);

describe("information cards", () => {
    it("renders the term dates", () => {
        render(<InformationCards />);

        expect(mockTermDates).toHaveBeenCalled();
    });

    it("renders the events", () => {
        render(<InformationCards />);

        expect(mockEvents).toHaveBeenCalled();
    });
});
