import { render, screen } from "@testing-library/react";
import Button from "@/components/common/button";

describe("button", () => {
    it("renders a button", () => {
        render(<Button text="Watch our virtual tour" onClick={() => {}} />);

        const button = screen.queryByRole("button", { name: "Watch our virtual tour" });

        expect(button).toBeInTheDocument();
    });
});
