/*
 ******************************************************************************
 * Cucumber/Gherkin
 * ============================================================================
 * 
 * NOTES:
 * - Arrow functions not supported by cucumber when accessing the 'world' class
 *   SEE: github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
 * 
 ******************************************************************************
*/

const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

// ----------------------------------------------------------------------------
// Steps for the first learning outcome
// ----------------------------------------------------------------------------

Given("a fibonacci sequence initialized to {int}", function (value) {
    this.fibonacci.init(value);
});

When("a fibonacci sequence is started", function () {
    // Nothing to do, as done by the custom world
});

When("the sequence is skipped {int} time(s)", function (value) {
    this.fibonacci.skip(value);
});

Then("the next number should be {int}", function (value) {
    assert(this.fibonacci.next() == value);
});

Then("the state should be {string}", function (value) {
    assert(this.fibonacci.state() == value);
});

// ----------------------------------------------------------------------------
// My steps
// ----------------------------------------------------------------------------

When("I call next {int} times", function (value) {
    for (let i = 0; i < value; i++) {
        this.fibonacci.next();
    }
});

// ----------------------------------------------------------------------------
// My throws
// ----------------------------------------------------------------------------

Given("a fibonacci sequence incorrectly initialized to {int}", function (value) {
    try {
        this.fibonacci.init(value);
    } catch {
        this.itThrew();
    }
});

When("the sequence is incorrectly skipped {int} times", function (int) {
    try {
        this.fibonacci.skip(value);
    } catch {
        this.itThrew();
    }
});

When("the sequence is incorrectly skipped {float} times", function (float) {
    try {
        this.fibonacci.init(float);
    } catch {
        this.itThrew();
    }
});

Then("an exception should be thrown", function () {
    assert(this.hasThrown());
});



/*
Scenario: Finding the previous number
Given a fibonacci sequence initialized to 8
Then the previous number should be 5

Then("the previous number should be {int}", function (value) {
    (this.fibonacci.next() == next);
    (this.fibonacci.state() == state);
    assert(((next) - (state)) == value);
});
*/