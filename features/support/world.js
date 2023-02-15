const cucumber = require("@cucumber/cucumber");
const Fibonacci = require("../../Fibonacci");

class CustomWorld {
    constructor() {
        this.fibonacci = new Fibonacci();
    }
}

cucumber.setWorldConstructor(CustomWorld);