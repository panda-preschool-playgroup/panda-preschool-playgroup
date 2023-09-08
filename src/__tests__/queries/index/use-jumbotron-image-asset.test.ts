import { useGetJumbotronImage } from "@/queries/index/use-get-jumbotron-image";

jest.mock("gatsby", () => ({
    useStaticQuery: jest.fn().mockReturnValue({
        contentfulAsset: {
            gatsbyImageData: "mock image",
        },
    }),
    graphql: jest.fn(),
}));

describe("useGetJumbotronImage", () => {
    it("returns jumbotron image", () => {
        const jumbotronImage: Queries.ContentfulAsset = useGetJumbotronImage();

        expect(jumbotronImage.gatsbyImageData).toEqual("mock image");
    });
});
