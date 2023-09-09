import Section from "@/components/index/section";
import { render, screen } from "@testing-library/react";

const testImage = <img alt="Test"></img>;

describe("section", () => {
    it("renders a standard section's heading", () => {
        render(<Section style="standard" heading="Test heading" />);

        const heading = screen.queryByRole("heading", { name: "Test heading" });

        expect(heading).toBeInTheDocument();
    });

    it("renders a standard section's children", () => {
        render(
            <Section style="standard" heading="Test heading">
                <p>Test content</p>
            </Section>,
        );

        const content = screen.queryByText("Test content");

        expect(content).toBeInTheDocument();
    });

    it("renders a standard section's image", () => {
        render(<Section style="standard" heading="Test heading" image={testImage} />);

        const image = screen.queryByRole("img", { name: "Test" });

        expect(image).toBeInTheDocument();
    });

    it("renders an alt section's heading", () => {
        render(<Section style="alt" heading="Test heading" />);

        const heading = screen.queryByRole("heading", { name: "Test heading" });

        expect(heading).toBeInTheDocument();
    });

    it("renders an alt section's children", () => {
        render(
            <Section style="alt" heading="Test heading">
                <p>Test content</p>
            </Section>,
        );

        const content = screen.queryByText("Test content");

        expect(content).toBeInTheDocument();
    });

    it("renders an alt section's image", () => {
        render(<Section style="alt" heading="Test heading" image={testImage} />);

        const image = screen.queryByRole("img", { name: "Test" });

        expect(image).toBeInTheDocument();
    });
});
