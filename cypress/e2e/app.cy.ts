describe("app", () => {
    it("renders with a heading", () => {
        cy.visit("/");

        cy.findByRole("banner").findByRole("heading", { name: "PANDA PRE-SCHOOL PLAYGROUP" }).should("exist");
    });

    it("renders the logo", () => {
        cy.visit("/");

        cy.findByRole("banner").findByRole("img", { name: "Panda Pre-School Playgroup Logo" }).should("exist");
    });
});
