import { render } from "@testing-library/react";
import IndexPage, { Head } from "../../pages";

describe("index", () => {
    it("renders", () => {
        const { asFragment } = render(<IndexPage />);

        expect(asFragment()).toMatchSnapshot();
    });
});

describe("head", () => {
    it("renders", () => {
        const { asFragment } = render(<Head />);

        expect(asFragment()).toMatchSnapshot();
    });
});
