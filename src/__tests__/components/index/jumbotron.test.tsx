import { render, screen } from "@testing-library/react";
import Jumbotron from "@/components/index/jumbotron";
import * as gatsbyPluginImage from "gatsby-plugin-image";

jest.mock("@/queries/index/use-get-jumbotron-image", () => ({
    useGetJumbotronImage: jest.fn().mockReturnValue({
        gatsbyImageData: "mock image",
    }),
}));

beforeEach(() => {
    jest.clearAllMocks();
});

describe("jumbotron", () => {
    it("renders", () => {
        render(<Jumbotron />);

        const content = screen.queryByText("A safe, welcoming and fun environment");

        expect(content).toBeInTheDocument();
    });

    it("renders the virtual tour link", () => {
        render(<Jumbotron />);

        const link = screen.queryByRole("link", { name: "Watch our virtual tour" });

        expect(link).toBeInTheDocument();
    });

    it("renders the jumbotron image", () => {
        render(<Jumbotron />);

        expect(gatsbyPluginImage.GatsbyImage).toHaveBeenCalledWith(
            expect.objectContaining({ image: "mock image" }),
            expect.anything(),
        );
    });
});
