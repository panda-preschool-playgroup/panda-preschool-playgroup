import { render, screen } from "@testing-library/react";
import Navigation from "@/components/layout/header/navigation";
import NavigationSection from "@/components/layout/header/navigation-section";

jest.mock("@/components/layout/header/navigation-section");
const mockNavigationSection = jest.mocked(NavigationSection);

beforeEach(() => {
    jest.clearAllMocks();
});

describe("navigation", () => {
    it("renders the heading", () => {
        render(<Navigation />);

        const heading = screen.queryByRole("heading", { name: "PANDA PRE-SCHOOL PLAYGROUP" });

        expect(heading).toBeInTheDocument();
    });

    it("renders the home page link", () => {
        render(<Navigation />);

        const homepageLink = screen.queryByRole("link", { name: "Home" });

        expect(homepageLink).toBeInTheDocument();
    });

    it("renders the navigation sections", () => {
        render(<Navigation />);

        expect(mockNavigationSection).toHaveBeenCalledTimes(5);
    });

    it("renders the apply button", () => {
        render(<Navigation />);

        const applyButton = screen.queryByRole("link", { name: "APPLY" });

        expect(applyButton).toBeInTheDocument();
    });
});
