import { render, screen } from "@testing-library/react";
import { createMockContentfulAsset } from "@/test/fixtures";
import * as gatsbyPluginImage from "gatsby-plugin-image";
import Jumbotron from "@/components/index/jumbotron";
import * as jumbotronQuery from "@/queries/index/use-jumbotron-image";

jest.mock("@/queries/index/use-jumbotron-image", () => ({
    useJumbotronImage: jest.fn(),
}));
const mockJumbotronQuery = jest.mocked(jumbotronQuery);

const image = createMockContentfulAsset();
mockJumbotronQuery.useJumbotronImage.mockReturnValue(image);

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

        expect(mockJumbotronQuery.useJumbotronImage).toHaveBeenCalledTimes(1);

        expect(gatsbyPluginImage.GatsbyImage).toHaveBeenCalledWith(
            expect.objectContaining({ image: image.gatsbyImageData }),
            expect.anything(),
        );
    });
});
