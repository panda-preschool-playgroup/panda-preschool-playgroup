import { render, screen } from "@testing-library/react";
import NavigationItem from "@/components/layout/navigation/navigation-item";

describe("navigation item", () => {
    it("renders a link when there is an href", () => {
        render(<NavigationItem text="Contact" href="#" />);

        const link = screen.queryByRole("link", { name: "Contact" });

        expect(link).toBeInTheDocument();
    });

    it("renders text when there is no href", () => {
        render(<NavigationItem text="Contact" />);

        const text = screen.queryByText("Contact");

        expect(text).toBeInTheDocument();
    });

    it("renders the active class when the navigation item is active", () => {
        render(<NavigationItem text="Contact" href="#" activeSection="Contact" />);

        const link = screen.queryByRole("link", { name: "Contact" });

        expect(link).toHaveClass("text-cyan");
    });

    it("does not render the active class when the navigation item is inactive", () => {
        render(<NavigationItem text="Contact" href="#" activeSection="Funding" />);

        const link = screen.queryByRole("link", { name: "Contact" });

        expect(link).not.toHaveClass("text-cyan");
    });
});
