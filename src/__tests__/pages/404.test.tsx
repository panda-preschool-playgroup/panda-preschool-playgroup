import { render } from "@testing-library/react";
import NotFoundPage, { Head } from "../../pages/404";

describe("not found", () => {
    it("renders", () => {
        const { asFragment } = render(<NotFoundPage />);

        expect(asFragment()).toMatchSnapshot();
    });
});

describe("head", () => {
    it("renders", () => {
        const { asFragment } = render(<Head />);

        expect(asFragment()).toMatchSnapshot();
    });
});
