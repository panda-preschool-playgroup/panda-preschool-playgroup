import { render, screen } from "@testing-library/react";
import NavigationSection from "@/components/layout/header/navigation-section";
import NavigationItem from "@/components/layout/header/navigation-item";

jest.mock("@/components/layout/header/navigation-item");
const mockNavigationItem = jest.mocked(NavigationItem);

beforeEach(() => {
    jest.clearAllMocks();
});

describe("navigation section", () => {
    it("renders a navigation item when there is an href", () => {
        render(<NavigationSection title="Contact" href="#" />);

        expect(mockNavigationItem).toHaveBeenCalled();
    });

    it("renders a drop-down button when there is no href", () => {
        render(<NavigationSection title="Contact" menuItems={[{ title: "Playgroup", href: "#" }]} />);

        const button = screen.queryByRole("button");

        expect(button).toBeInTheDocument();
    });
});
