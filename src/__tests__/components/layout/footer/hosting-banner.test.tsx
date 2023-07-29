import { render, screen } from "@testing-library/react";
import HostingBanner from "@/components/layout/footer/hosting-banner";

describe("hosting banner", () => {
    it("renders", () => {
        render(<HostingBanner />);

        const content = screen.queryByText("Free charity hosting by");

        expect(content).toBeInTheDocument();
    });
});
