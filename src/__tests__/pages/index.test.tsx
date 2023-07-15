import { render } from "@testing-library/react";
import IndexPage, { Head } from "@/pages/index";
import Seo from "@/components/seo";

jest.mock("@/components/seo");
const mockSeo = jest.mocked(Seo);

describe("index", () => {
    it("renders", () => {
        const { asFragment } = render(<IndexPage />);

        expect(asFragment()).toMatchSnapshot();
    });
});

describe("head", () => {
    it("renders seo", () => {
        render(<Head />);

        expect(mockSeo).toHaveBeenCalled();
    });
});
