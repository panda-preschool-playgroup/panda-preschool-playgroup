import { render, screen } from "@testing-library/react";
import IndexPage, { Head } from "@/pages/index";
import Seo from "@/components/seo";
import Navigation from "@/components/common/navigation/navigation";

jest.mock("@/components/seo");
const mockSeo = jest.mocked(Seo);

jest.mock("@/components/common/navigation/navigation");
const mockNavigation = jest.mocked(Navigation);

beforeEach(() => {
    jest.clearAllMocks();
});

describe("index", () => {
    it("renders", () => {
        render(<IndexPage />);

        const main = screen.queryByRole("main");

        expect(main).toBeInTheDocument();
    });

    it("renders the navbar", () => {
        render(<IndexPage />);

        expect(mockNavigation).toHaveBeenCalled();
    });
});

describe("head", () => {
    it("renders seo", () => {
        render(<Head />);

        expect(mockSeo).toHaveBeenCalled();
    });
});
