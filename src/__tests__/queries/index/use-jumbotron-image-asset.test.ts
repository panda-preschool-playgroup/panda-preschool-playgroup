import { useJumbotronImageAsset } from "@/queries/index/use-jumbotron-image-asset";

jest.mock("gatsby", () => ({
    useStaticQuery: jest.fn().mockReturnValue({
        contentfulAsset: {
            gatsbyImageData: "mock image",
        },
    }),
    graphql: jest.fn(),
}));

describe("useJumbotronImageAsset", () => {
    it("returns jumbotron image asset", () => {
        const jumbotronImageAsset: Queries.ContentfulAsset = useJumbotronImageAsset();

        expect(jumbotronImageAsset.gatsbyImageData).toEqual("mock image");
    });
});
