const Calculator = require("./calculator");

// Calculator
it("Calculator (Exists)", () => {
    expect(new Calculator()).toBeDefined();
});

it("Calculator (Has all functions)", () => {
    expect(new Calculator()).toHaveProperty("add");
    expect(new Calculator()).toHaveProperty("subtract");
    expect(new Calculator()).toHaveProperty("multiply");
    expect(new Calculator()).toHaveProperty("divide");
});

it("Calculator (Add, Happy path 1)", () => {
    let calc = new Calculator();

    expect(calc.add(1, 2)).toBe(3);
});

it("Calculator (Add, Happy path 2)", () => {
    let calc = new Calculator();

    expect(calc.add(12, -23)).toBe(12 - 23);
});

it("Calculator (Add, Bad input)", () => {
    let calc = new Calculator();

    expect(calc.add("", 23)).toBe(null);
});

it("Calculator (Subtract, Happy path 1)", () => {
    let calc = new Calculator();

    expect(calc.subtract(1, 2)).toBe(-1);
});

it("Calculator (Subtract, Happy path 2)", () => {
    let calc = new Calculator();

    expect(calc.subtract(12, -23)).toBe(12 + 23);
});

it("Calculator (Subtract, Bad input)", () => {
    let calc = new Calculator();

    expect(calc.subtract("", 23)).toBe(null);
});

it("Calculator (Multiply, Happy path 1)", () => {
    let calc = new Calculator();

    expect(calc.multiply(1, 2)).toBe(2);
});

it("Calculator (Multiply, Happy path 2)", () => {
    let calc = new Calculator();

    expect(calc.multiply(12, 0)).toBe(0);
});

it("Calculator (Multiply, Bad input)", () => {
    let calc = new Calculator();

    expect(calc.multiply("", 23)).toBe(null);
});

it("Calculator (Divide, Happy path 1)", () => {
    let calc = new Calculator();

    expect(calc.divide(10, 2)).toBe(5);
});

it("Calculator (Divide, Happy path 2)", () => {
    let calc = new Calculator();

    expect(calc.divide(12, 4)).toBe(3);
});

it("Calculator (Divide, Float division)", () => {
    let calc = new Calculator();

    expect(calc.divide(1, 4)).toBeCloseTo(0.25);
});

it("Calculator (Divide, Divide by zero)", () => {
    let calc = new Calculator();

    expect(calc.divide(123, 0)).toBe(NaN);
});

it("Calculator (Divide, Bad input)", () => {
    let calc = new Calculator();

    expect(calc.divide("", 23)).toBe(null);
});