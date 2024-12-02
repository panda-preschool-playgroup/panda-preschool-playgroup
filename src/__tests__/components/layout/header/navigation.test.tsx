import { render, screen } from "@testing-library/react";
import Navigation from "@/components/layout/header/navigation";
import NavigationSection from "@/components/layout/header/navigation-section";

jest.mock("@/components/layout/header/navigation-section");
const mockNavigationSection = jest.mocked(NavigationSection);

jest.mock("@/queries/layout/header/use-prospectus");

beforeEach(() => {
    jest.clearAllMocks();
});

describe("navigation", () => {
    it("renders the heading", () => {
        render(<Navigation />);

        const heading = screen.queryByRole("heading", { name: "Panda Preschool Playgroup" });

        expect(heading).toBeInTheDocument();
    });

    it("renders the home page link", () => {
        render(<Navigation />);

        const homepageLink = screen.queryByRole("link", { name: "Panda Preschool Playgroup" });

        expect(homepageLink).toBeInTheDocument();
    });

    it("renders the navigation sections", () => {
        render(<Navigation />);

        expect(mockNavigationSection).toHaveBeenCalled();
    });

    it("renders the button", () => {
        render(<Navigation />);

        const button = screen.queryByRole("link", { name: "Apply" });

        expect(button).toBeInTheDocument();
    });
});
