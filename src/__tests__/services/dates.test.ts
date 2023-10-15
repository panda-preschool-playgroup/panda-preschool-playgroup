import { formatDate } from "@/services/dates";

describe("format date", () => {
    it("formats the date", () => {
        const date = formatDate("2023-09-06");

        expect(date).toEqual("Wed 6 Sept 2023");
    });

    it("returns an empty string for a null value", () => {
        const date = formatDate(null);

        expect(date).toEqual("");
    });

    it("returns an empty string for an undefined value", () => {
        const date = formatDate(undefined);

        expect(date).toEqual("");
    });
});
