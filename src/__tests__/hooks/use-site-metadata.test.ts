import { useSiteMetadata } from "../../hooks/use-site-metadata";

const queryData: SiteMetadataQueryData = {
    site: {
        siteMetadata: {
            title: "Test Graphql Title",
            description: "Test Graphql Description",
        },
    },
};

jest.mock("gatsby", () => ({
    useStaticQuery: jest.fn().mockReturnValue(queryData),
    graphql: jest.fn(),
}));

describe("useSiteMetadata", () => {
    it("returns site metadata", () => {
        const siteMetadata = useSiteMetadata();

        expect(siteMetadata).toEqual(queryData.site.siteMetadata);
    });
});
