import { useSiteMetadata } from "@/queries/layout/head/use-site-metadata";

jest.mock("gatsby", () => ({
    useStaticQuery: jest.fn().mockReturnValue({
        site: {
            siteMetadata: {
                title: "Test Graphql Title",
                description: "Test Graphql Description",
            },
        },
    }),
    graphql: jest.fn(),
}));

describe("useSiteMetadata", () => {
    it("returns site metadata", () => {
        const siteMetadata = useSiteMetadata();

        expect(siteMetadata.title).toEqual("Test Graphql Title");
        expect(siteMetadata.description).toEqual("Test Graphql Description");
    });
});
