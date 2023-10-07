import { useTermDates } from "@/queries/index/use-term-dates";

jest.mock("gatsby", () => ({
    useStaticQuery: jest.fn().mockReturnValue({
        contentfulTermDates: {
            academicYear: "2023/24",
        },
    }),
    graphql: jest.fn(),
}));

describe("useTermDates", () => {
    it("returns term dates", () => {
        const termDates: Queries.ContentfulTermDates = useTermDates();

        expect(termDates.academicYear).toEqual("2023/24");
    });
});
