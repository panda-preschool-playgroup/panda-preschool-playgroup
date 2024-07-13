import { render, screen } from "@testing-library/react";
import { createMockContentfulAsset, createMockContentfulVirtualTour } from "@/test/fixtures";
import * as gatsbyPluginImage from "gatsby-plugin-image";
import Jumbotron from "@/components/index/jumbotron";
import * as jumbotronQuery from "@/queries/index/use-jumbotron-image";
import * as virtualTourQuery from "@/queries/index/use-virtual-tour";

jest.mock("@/queries/index/use-jumbotron-image", () => ({
    useJumbotronImage: jest.fn(),
}));
const mockJumbotronQuery = jest.mocked(jumbotronQuery);

jest.mock("@/queries/index/use-virtual-tour", () => ({
    useVirtualTour: jest.fn(),
}));
const mockVirtualTour = jest.mocked(virtualTourQuery);

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

    it("renders the virtual tour button when the tour is published", () => {
        mockVirtualTour.useVirtualTour.mockReturnValueOnce(createMockContentfulVirtualTour({ isPublished: true }));

        render(<Jumbotron />);

        const button = screen.queryByRole("button", { name: "Watch our virtual tour" });

        expect(button).toBeInTheDocument();
    });

    it("does not render the virtual tour button when the tour is not published", () => {
        mockVirtualTour.useVirtualTour.mockReturnValueOnce(createMockContentfulVirtualTour({ isPublished: false }));

        render(<Jumbotron />);

        const button = screen.queryByRole("button", { name: "Watch our virtual tour" });

        expect(button).not.toBeInTheDocument();
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
