import { useFooterContent } from "@/queries/layout/footer/use-footer-content";

jest.mock("gatsby", () => ({
    useStaticQuery: jest.fn().mockReturnValue({
        contentfulFooter: {
            emailAddress: "test@pandaplaygroup.co.uk",
            phoneNumber: "11111 111111",
            facebookLinks: [{ contentful_id: "1", url: "https://pandaplaygroup.co.uk/1", text: "One" }],
        },
    }),
    graphql: jest.fn(),
}));

describe("useFooterContent", () => {
    it("returns footer content", () => {
        const footerContent: Queries.ContentfulFooter = useFooterContent();

        expect(footerContent.emailAddress).toEqual("test@pandaplaygroup.co.uk");
        expect(footerContent.phoneNumber).toEqual("11111 111111");
        expect(footerContent.facebookLinks).toHaveLength(1);
    });
});
