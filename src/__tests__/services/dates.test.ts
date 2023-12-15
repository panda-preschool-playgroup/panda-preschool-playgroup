import { dateIsInThePast, formatDate } from "@/services/dates";

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

describe("date is in the past", () => {
    it("returns true when the date is yesterday", () => {
        const date = new Date(new Date().setDate(new Date().getDate() - 1));

        expect(dateIsInThePast(date.toDateString())).toEqual(true);
    });

    it("returns false when the date is today", () => {
        const date = new Date();

        expect(dateIsInThePast(date.toDateString())).toEqual(false);
    });

    it("returns false when the date is tomorrow", () => {
        const date = new Date(new Date().setDate(new Date().getDate() + 1));

        expect(dateIsInThePast(date.toDateString())).toEqual(false);
    });
});
