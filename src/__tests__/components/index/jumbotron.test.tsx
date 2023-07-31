import { render, screen } from "@testing-library/react";
import Jumbotron from "@/components/index/jumbotron";

describe("jumbotron", () => {
    it("renders", () => {
        render(<Jumbotron />);

        const content = screen.queryByText("A safe, welcoming and fun environment");

        expect(content).toBeInTheDocument();
    });

    it("renders the virtual tour link", () => {
        render(<Jumbotron />);

        const link = screen.queryByRole("link", { name: "Watch our virtual tour" });

        expect(link).toBeInTheDocument();
    });
});
