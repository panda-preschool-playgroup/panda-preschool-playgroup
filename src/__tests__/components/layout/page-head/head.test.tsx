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
});
