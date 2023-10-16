describe("app", () => {
    it("renders with a heading", () => {
        cy.visit("/");

        cy.findByRole("banner").findByRole("heading", { name: "Panda Playgroup" }).should("exist");
    });

    it("renders the homepage content", () => {
        cy.visit("/");

        cy.findByRole("heading", { name: "Our pre-school for little Pandas" });
    });
});
