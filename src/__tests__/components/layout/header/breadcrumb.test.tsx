import Breadcrumb from "@/components/layout/header/breadcrumb";
import { render, screen } from "@testing-library/react";

describe("breadcrumb", () => {
    it("renders the home link", () => {
        render(<Breadcrumb activeSection="Sessions" current="Our pre-school" />);

        const homeLink = screen.queryByRole("link", { name: "Home" });

        expect(homeLink).toBeInTheDocument();
    });

    it("renders the active section", () => {
        render(<Breadcrumb activeSection="Sessions" current="Our pre-school" />);

        const activeSection = screen.queryByText("Sessions");

        expect(activeSection).toBeInTheDocument();
    });

    it("renders the current page", () => {
        render(<Breadcrumb activeSection="Sessions" current="Our pre-school" />);

        const currentPage = screen.queryByText("Our pre-school");

        expect(currentPage).toBeInTheDocument();
    });
});
