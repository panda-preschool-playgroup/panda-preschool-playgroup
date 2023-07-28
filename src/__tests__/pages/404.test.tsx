import { render } from "@testing-library/react";
import NotFoundPage, { Head } from "@/pages/404";
import Seo from "@/components/common/seo";

jest.mock("@/components/common/seo");
const mockSeo = jest.mocked(Seo);

describe("not found", () => {
    it("renders", () => {
        const { asFragment } = render(<NotFoundPage />);

        expect(asFragment()).toMatchSnapshot();
    });
});

describe("head", () => {
    it("renders seo with a page title", () => {
        render(<Head />);

        expect(mockSeo).toHaveBeenCalled();

        expect(mockSeo.mock.calls[0][0].pageTitle).toEqual("Not found");
    });
});
