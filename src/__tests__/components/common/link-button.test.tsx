import { render, screen } from "@testing-library/react";
import LinkButton from "@/components/common/link-button";

describe("link button", () => {
    it("renders", () => {
        render(<LinkButton text="Funding" href="/funding" />);

        const linkButton = screen.queryByRole("link", { name: "Funding" });

        expect(linkButton).toBeInTheDocument();
    });

    it("sets the href", () => {
        render(<LinkButton text="Funding" href="/funding" />);

        const linkButton = screen.queryByRole("link", { name: "Funding" });

        expect(linkButton).toHaveAttribute("href", "/funding");
    });
});
