const reverseString = require("./reverseString");

it("Reverse (Happy path 1)", () => {
    expect(reverseString("Asdf")).toBe("fdsA");
});

it("Reverse (Happy path 2)", () => {
    expect(reverseString("shlenk")).toBe("knelhs");
});

it("Reverse (Empty string)", () => {
    expect(reverseString("")).toBe("");
});

it("Reverse (No input)", () => {
    expect(reverseString()).toBe(null);
});