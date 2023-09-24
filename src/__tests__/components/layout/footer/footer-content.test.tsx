import { render, screen } from "@testing-library/react";
import FooterContent from "@/components/layout/footer/footer-content";

jest.mock("@/queries/layout/footer/use-footer-content", () => ({
    useFooterContent: jest.fn().mockReturnValue({
        emailAddress: "test@pandaplaygroup.co.uk",
        phoneNumber: "11111 111111",
        facebookLinks: [
            { contentful_id: "1", url: "https://pandaplaygroup.co.uk/1", text: "One" },
            { contentful_id: "2", url: "https://pandaplaygroup.co.uk/2", text: "Two" },
        ],
    }),
}));

beforeEach(() => {
    jest.clearAllMocks();
});

describe("footer content", () => {
    it("renders the contact details", () => {
        render(<FooterContent />);

        const contactDetails = screen.queryByText(/York/);

        expect(contactDetails).toBeInTheDocument();
    });

    it("renders the email address", () => {
        render(<FooterContent />);

        const contactDetails = screen.queryByText("test@pandaplaygroup.co.uk");

        expect(contactDetails).toBeInTheDocument();
    });

    it("renders the phone number", () => {
        render(<FooterContent />);

        const contactDetails = screen.queryByText("11111 111111");

        expect(contactDetails).toBeInTheDocument();
    });

    it("renders the useful links", () => {
        render(<FooterContent />);

        const privacyNotice = screen.queryByRole("link", { name: "Privacy notice" });
        const vacancies = screen.queryByRole("link", { name: "Vacancies" });

        expect(privacyNotice).toBeInTheDocument();
        expect(vacancies).toBeInTheDocument();
    });

    it("renders the social media links", () => {
        render(<FooterContent />);

        const one = screen.queryByRole("link", { name: "One Facebook Page" });
        const two = screen.queryByRole("link", { name: "Two Facebook Page" });

        expect(one).toBeInTheDocument();
        expect(two).toBeInTheDocument();
    });
});
