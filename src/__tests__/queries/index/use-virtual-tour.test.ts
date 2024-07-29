import { useVirtualTour } from "@/queries/index/use-virtual-tour";
import * as gatsby from "gatsby";

jest.mock("gatsby", () => ({
    useStaticQuery: jest.fn(),
    graphql: jest.fn(),
}));
const mockGatsby = jest.mocked(gatsby);

describe("useVirtualTour", () => {
    it("returns virtual tour", () => {
        mockGatsby.useStaticQuery.mockReturnValueOnce({
            contentfulVirtualTour: {
                isPublished: true,
            },
        });

        const virtualTour: Queries.Maybe<Queries.ContentfulVirtualTour> = useVirtualTour();

        expect(virtualTour?.isPublished).toBe(true);
    });
});
