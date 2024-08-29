const users = require("../fixtures/userData");

describe("User Registration and Login", () => {
  const baseUrl = "http://localhost:3000/";

  const visitHomePage = () => {
    cy.visit(baseUrl);
    cy.contains("Proyecto Web Básico");
  };

  const fillEmailAndPassword = (email, password) => {
    cy.get('[type="email"]').should("be.visible").type(email);
    cy.get('[type="password"]').should("be.visible").type(password);
  };

  beforeEach(() => {
    visitHomePage();
  });

  users.forEach((user) => {
    describe(`Tests for ${user.email}`, () => {
      it("Register a new user", () => {
        cy.get("a").should("be.visible").contains("Regístrate").click();
        fillEmailAndPassword(user.email, user.password);
        cy.get("a").should("be.visible").contains("Inicia Sesión").click();
      });

      it("Login with the registered user", () => {
        fillEmailAndPassword(user.email, user.password);
        cy.get("button").should("be.visible").contains("Login").click();
        cy.get("p").should("be.visible").contains(user.email).click();
      });
    });
  });
});
