import * as gatsbyPluginImage from "gatsby-plugin-image";
import { render, screen } from "@testing-library/react";
import { createMockContentfulAsset } from "@/test/fixtures";
import ContentfulImage from "@/components/common/contentful-image";

const images: Queries.ContentfulAsset[] = [createMockContentfulAsset({ title: "Test", description: "Alt test" })];

beforeEach(() => {
    jest.clearAllMocks();
});

describe("contentful-image", () => {
    it("renders an image", () => {
        render(<ContentfulImage imageTitle="Test" images={images} />);

        expect(gatsbyPluginImage.GatsbyImage).toHaveBeenCalledWith(
            expect.objectContaining({ image: images[0].gatsbyImageData }),
            expect.anything(),
        );
    });

    it("renders alt text", () => {
        render(<ContentfulImage imageTitle="Test" images={images} />);

        expect(gatsbyPluginImage.GatsbyImage).toHaveBeenCalledWith(
            expect.objectContaining({ alt: images[0].description }),
            expect.anything(),
        );
    });

    it("renders the image with a matching title", () => {
        const images: Queries.ContentfulAsset[] = [
            createMockContentfulAsset({ title: "Test 1" }),
            createMockContentfulAsset({ title: "Test 2" }),
        ];

        render(<ContentfulImage imageTitle="Test 2" images={images} />);

        expect(gatsbyPluginImage.GatsbyImage).toHaveBeenCalledWith(
            expect.objectContaining({ image: images[1].gatsbyImageData }),
            expect.anything(),
        );
    });

    it("does not render anything when no image is found", () => {
        render(<ContentfulImage imageTitle="Test not found" images={images} />);

        expect(gatsbyPluginImage.GatsbyImage).not.toHaveBeenCalled();

        const image = screen.queryByRole("img");

        expect(image).not.toBeInTheDocument();
    });

    it("does not render anything when the image has no data", () => {
        const images: Queries.ContentfulAsset[] = [createMockContentfulAsset({ title: "Test", gatsbyImageData: null })];

        render(<ContentfulImage imageTitle="Test" images={images} />);

        expect(gatsbyPluginImage.GatsbyImage).not.toHaveBeenCalled();

        const image = screen.queryByRole("img");

        expect(image).not.toBeInTheDocument();
    });
});
