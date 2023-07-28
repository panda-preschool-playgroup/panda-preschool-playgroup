import { render, screen } from "@testing-library/react";
import IndexPage, { Head } from "@/pages/index";
import Seo from "@/components/common/seo";
import Navigation from "@/components/layout/navigation/navigation";

jest.mock("@/components/common/seo");
const mockSeo = jest.mocked(Seo);

jest.mock("@/components/layout/navigation/navigation");
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
