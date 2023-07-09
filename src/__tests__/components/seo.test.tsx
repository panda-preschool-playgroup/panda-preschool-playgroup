import { render } from "@testing-library/react";
import Seo from "../../components/seo";

jest.mock("../../hooks/use-site-metadata", () => ({
    useSiteMetadata: jest.fn().mockReturnValue({ title: "Test Title", description: "Test Description" }),
}));

describe("seo", () => {
    it("renders", () => {
        const { asFragment } = render(<Seo />);

        expect(asFragment()).toMatchSnapshot();
    });

    it("renders with a page title", () => {
        const { asFragment } = render(<Seo pageTitle="Test Page Title" />);

        expect(asFragment()).toMatchSnapshot();
    });
});
