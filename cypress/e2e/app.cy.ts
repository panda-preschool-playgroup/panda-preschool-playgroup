describe("app", () => {
    it("renders with a heading", () => {
        cy.visit("/");

        cy.findByRole("banner").findByRole("heading", { name: "PANDA PLAYGROUP" }).should("exist");
    });

    it("renders the logo", () => {
        cy.visit("/");

        cy.findByRole("banner").findByRole("img", { name: "Panda Playgroup Logo" }).should("exist");
    });

    it("renders the homepage content", () => {
        cy.visit("/");

        cy.findByRole("heading", { name: "Our pre-school for little Pandas" });
    });
});
