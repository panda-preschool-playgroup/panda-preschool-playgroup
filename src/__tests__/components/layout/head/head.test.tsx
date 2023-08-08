import Fonts from "@/components/layout/head/fonts";
import Head from "@/components/layout/head/head";
import Seo from "@/components/layout/head/seo";
import { render } from "@testing-library/react";

jest.mock("@/components/layout/head/fonts");
const mockFonts = jest.mocked(Fonts);

jest.mock("@/components/layout/head/seo");
const mockSeo = jest.mocked(Seo);

beforeEach(() => {
    jest.clearAllMocks();
});

describe("head", () => {
    it("renders fonts", () => {
        render(<Head />);

        expect(mockFonts).toHaveBeenCalled();
    });

    it("renders seo", () => {
        render(<Head />);

        expect(mockSeo).toHaveBeenCalled();
    });
});
