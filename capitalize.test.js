const capitalize = require("./capitalize");

it("Capitalize (Happy path 1)", () => {
    expect(capitalize("hello")).toBe("Hello");
});

it("Capitalize (Happy path 2)", () => {
    expect(capitalize("this is a test")).toBe("This is a test");
});

it("Capitalize (Empty string)", () => {
    expect(capitalize("")).toBe("");
});

it("Capitalize (No input)", () => {
    expect(capitalize()).toBe(null);
});

it("Capitalize (Numbers)", () => {
    expect(capitalize("123hi")).toBe("123hi");
});