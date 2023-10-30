import { render, screen } from "@testing-library/react";
import Article from "@/components/common/article";

describe("article", () => {
    it("renders the heading", () => {
        render(<Article heading="Test heading" />);

        const heading = screen.queryByRole("heading", { name: "Test heading" });

        expect(heading).toBeInTheDocument();
    });

    it("renders the children", () => {
        render(
            <Article heading="Test heading">
                <p>Test content</p>
            </Article>,
        );

        const content = screen.queryByText("Test content");

        expect(content).toBeInTheDocument();
    });

    it("renders the image", () => {
        render(<Article heading="Test heading" image={<img alt="Test"></img>} />);

        const image = screen.queryByRole("img", { name: "Test" });

        expect(image).toBeInTheDocument();
    });
});
