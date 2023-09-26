import { useHomepageImages } from "@/queries/index/use-homepage-images";
import * as gatsby from "gatsby";

jest.mock("gatsby", () => ({
    useStaticQuery: jest.fn(),
    graphql: jest.fn(),
}));
const mockGatsby = jest.mocked(gatsby);

describe("useHomepageImages", () => {
    it("returns homepage images", () => {
        mockGatsby.useStaticQuery.mockReturnValueOnce({
            allContentfulAsset: {
                nodes: [
                    {
                        title: "Test 1",
                    },
                    {
                        title: "Test 2",
                    },
                ],
            },
        });

        const homepageImages: Queries.ContentfulAsset[] = useHomepageImages();

        expect(homepageImages).toHaveLength(2);

        expect(homepageImages[0].title).toEqual("Test 1");
        expect(homepageImages[1].title).toEqual("Test 2");
    });
});
