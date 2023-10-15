import { useTermDates } from "@/queries/index/use-term-dates";

jest.mock("gatsby", () => ({
    useStaticQuery: jest.fn().mockReturnValue({
        contentfulTermDates: {
            terms: [
                {
                    name: "Autumn",
                },
            ],
        },
    }),
    graphql: jest.fn(),
}));

describe("useTermDates", () => {
    it("returns term dates", () => {
        const termDates: Queries.ContentfulTermDates = useTermDates();

        expect(termDates.terms?.at(0)?.name).toEqual("Autumn");
    });
});
