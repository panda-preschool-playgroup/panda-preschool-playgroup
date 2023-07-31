import { render } from "@testing-library/react";
import MockLayout from "@/test/mock-layout";
import IndexPage, { Head } from "@/pages/index";
import Seo from "@/components/common/seo";
import Layout from "@/components/layout/layout";
import Jumbotron from "@/components/index/jumbotron";

jest.mock("@/components/common/seo");
const mockSeo = jest.mocked(Seo);

jest.mock("@/components/layout/layout");
const mockLayout = jest.mocked(Layout).mockImplementation(MockLayout);

jest.mock("@/components/index/jumbotron");
const mockJumbotron = jest.mocked(Jumbotron);

beforeEach(() => {
    jest.clearAllMocks();
});

describe("index", () => {
    it("renders the layout", () => {
        render(<IndexPage />);

        expect(mockLayout).toHaveBeenCalled();
    });

    it("renders the jumbotron", () => {
        render(<IndexPage />);

        expect(mockJumbotron).toHaveBeenCalled();
    });
});

describe("head", () => {
    it("renders seo", () => {
        render(<Head />);

        expect(mockSeo).toHaveBeenCalled();
    });
});
