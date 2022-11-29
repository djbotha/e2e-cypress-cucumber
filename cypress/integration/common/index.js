/* eslint-disable no-undef */
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(`I am on the {string} page`, (url) => {
  cy.visit(url);
});

When(`I type {string} into the {string} field`, (value, id) => {
  cy.get(`#${id}`).type(value);
});

When(`I click the {string} button`, (id) => {
  cy.contains(`${id}`).click();
});

Then(`I see the {string} banner`, (value) => {
  cy.contains(value);
});
