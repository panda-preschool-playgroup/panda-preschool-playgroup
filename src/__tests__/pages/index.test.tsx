import { render } from "@testing-library/react";
import IndexPage, { Head } from "@/pages/index";
import Layout from "@/components/layout/layout";
import Seo from "@/components/common/seo";

jest.mock("@/components/layout/layout");
const mockLayout = jest.mocked(Layout);

jest.mock("@/components/common/seo");
const mockSeo = jest.mocked(Seo);

beforeEach(() => {
    jest.clearAllMocks();
});

describe("index", () => {
    it("renders the layout", () => {
        render(<IndexPage />);

        expect(mockLayout).toHaveBeenCalled();
    });
});

describe("head", () => {
    it("renders seo", () => {
        render(<Head />);

        expect(mockSeo).toHaveBeenCalled();
    });
});
