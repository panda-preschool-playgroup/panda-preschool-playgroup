import Fonts from "@/components/layout/page-head/fonts";
import PageHead from "@/components/layout/page-head/page-head";
import Seo from "@/components/layout/page-head/seo";
import { render } from "@testing-library/react";

jest.mock("@/components/layout/page-head/fonts");
const mockFonts = jest.mocked(Fonts);

jest.mock("@/components/layout/page-head/seo");
const mockSeo = jest.mocked(Seo);

beforeEach(() => {
    jest.clearAllMocks();
});

describe("page head", () => {
    it("renders fonts", () => {
        render(<PageHead />);

        expect(mockFonts).toHaveBeenCalled();
    });

    it("renders seo", () => {
        render(<PageHead />);

        expect(mockSeo).toHaveBeenCalled();
    });

    it("renders seo with a page title", () => {
        render(<PageHead pageTitle="Test title" />);

        expect(mockSeo).toHaveBeenCalled();

        expect(mockSeo.mock.calls[0][0].pageTitle).toEqual("Test title");
    });
});
