import { render } from "@testing-library/react";
import InformationCards from "@/components/index/information-cards";
import TermDates from "@/components/index/term-dates";
import Events from "@/components/index/events";
import * as useNewsQuery from "@/queries/index/use-news";
import News from "@/components/index/news";
import { createMockContentfulNews } from "@/test/fixtures";

jest.mock("@/queries/index/use-news", () => ({
    useNews: jest.fn(),
}));
const mockNewsQuery = jest.mocked(useNewsQuery);

jest.mock("@/components/index/news");
const mockNews = jest.mocked(News);

jest.mock("@/components/index/term-dates");
const mockTermDates = jest.mocked(TermDates);

jest.mock("@/components/index/events");
const mockEvents = jest.mocked(Events);

describe("information cards", () => {
    it("renders news", () => {
        mockNewsQuery.useNews.mockReturnValue(createMockContentfulNews({ isPublished: true }));

        render(<InformationCards />);

        expect(mockNews).toHaveBeenCalled();
    });

    it("renders the term dates", () => {
        render(<InformationCards />);

        expect(mockTermDates).toHaveBeenCalled();
    });

    it("renders the events", () => {
        render(<InformationCards />);

        expect(mockEvents).toHaveBeenCalled();
    });
});
