import { render } from "@testing-library/react";
import Seo from "@/components/common/seo";

jest.mock("@/hooks/use-site-metadata", () => ({
    useSiteMetadata: jest.fn().mockReturnValue({ title: "Test Title", description: "Test Description" }),
}));

describe("seo", () => {
    it("renders the default page title", () => {
        render(<Seo />);

        expect(document.title).toEqual("Test Title");
    });

    it("renders with a custom page title", () => {
        render(<Seo pageTitle="Test Page Title" />);

        expect(document.title).toEqual("Test Page Title | Test Title");
    });

    it("sets the metadata description", () => {
        render(<Seo pageTitle="Test Page Title" />);

        const metadata = document.getElementsByTagName("meta");

        expect(metadata).toHaveLength(1);

        expect(metadata[0].getAttribute("name")).toEqual("description");
        expect(metadata[0].getAttribute("content")).toEqual("Test Description");
    });
});
