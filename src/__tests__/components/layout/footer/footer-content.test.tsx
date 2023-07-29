import { render, screen } from "@testing-library/react";
import FooterContent from "@/components/layout/footer/footer-content";

describe("footer content", () => {
    it("renders the contact details", () => {
        render(<FooterContent />);

        const contactDetails = screen.queryByText(/York/);

        expect(contactDetails).toBeInTheDocument();
    });

    it("renders the useful links", () => {
        render(<FooterContent />);

        const policies = screen.queryByRole("link", { name: "Policies" });
        const privacyNotice = screen.queryByRole("link", { name: "Privacy notice" });
        const careers = screen.queryByRole("link", { name: "Careers" });

        expect(policies).toBeInTheDocument();
        expect(privacyNotice).toBeInTheDocument();
        expect(careers).toBeInTheDocument();
    });

    it("renders the social media links", () => {
        render(<FooterContent />);

        const pandaFacebook = screen.queryByRole("link", { name: "Panda Playgroup Facebook Page" });
        const stickyMittsFacebook = screen.queryByRole("link", { name: "Sticky Mitts & Tiny Tots Facebook Page" });

        expect(pandaFacebook).toBeInTheDocument();
        expect(stickyMittsFacebook).toBeInTheDocument();
    });
});
