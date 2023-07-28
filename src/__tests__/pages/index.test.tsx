import { render, screen } from "@testing-library/react";
import IndexPage, { Head } from "@/pages/index";
import Seo from "@/components/seo";
import Navbar from "@/components/common/navbar/navbar";

jest.mock("@/components/seo");
const mockSeo = jest.mocked(Seo);

jest.mock("@/components/common/navbar/navbar");
const mockNavbar = jest.mocked(Navbar);

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

        expect(mockNavbar).toHaveBeenCalled();
    });
});

describe("head", () => {
    it("renders seo", () => {
        render(<Head />);

        expect(mockSeo).toHaveBeenCalled();
    });
});
