import { useGetHomepageImages } from "@/queries/index/use-get-homepage-images";
import * as gatsby from "gatsby";

jest.mock("gatsby", () => ({
    useStaticQuery: jest.fn(),
    graphql: jest.fn(),
}));
const mockGatsby = jest.mocked(gatsby);

describe("useGetHomepageImages", () => {
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

        const homepageImages: Queries.ContentfulAsset[] = useGetHomepageImages();

        expect(homepageImages).toHaveLength(2);

        expect(homepageImages[0].title).toEqual("Test 1");
        expect(homepageImages[1].title).toEqual("Test 2");
    });
});
