import { render, screen } from "@testing-library/react";
import Layout from "@/components/layout/layout";
import Navigation from "@/components/layout/navigation/navigation";

jest.mock("@/components/layout/navigation/navigation");
const mockNavigation = jest.mocked(Navigation);

beforeEach(() => {
    jest.clearAllMocks();
});

describe("layout", () => {
    it("renders the header", () => {
        render(<Layout />);

        const header = screen.queryByRole("banner");

        expect(header).toBeInTheDocument();
    });

    it("renders the navigation", () => {
        render(<Layout />);

        expect(mockNavigation).toHaveBeenCalled();
    });

    it("renders the navigation with an active section", () => {
        render(<Layout activeSection="Contact" />);

        expect(mockNavigation.mock.calls[0][0]).toEqual({ activeSection: "Contact" });
    });

    it("renders the main section", () => {
        render(<Layout />);

        const main = screen.queryByRole("main");

        expect(main).toBeInTheDocument();
    });

    it("renders the children in the main section", () => {
        render(
            <Layout>
                <p>Test</p>
            </Layout>,
        );

        const children = screen.queryByText("Test");

        expect(children).toBeInTheDocument();
    });

    it("renders the footer", () => {});

    it("renders the footer content", () => {});

    it("renders the hosting banner", () => {});
});
