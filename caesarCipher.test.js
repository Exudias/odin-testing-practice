const caesarCipher = require("./caesarCipher");

it("Caesar Cipher (Happy Path 1)", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
});

it("Caesar Cipher (Happy Path 2)", () => {
    expect(caesarCipher("gfd", 2)).toBe("ihf");
});

it("Caesar Cipher (Wrapping)", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

it("Caesar Cipher (Capitals)", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

it("Caesar Cipher (Wrapping Capitals)", () => {
    expect(caesarCipher("XyZ", 3)).toBe("AbC");
});

it("Caesar Cipher (Punctuation)", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

it("Caesar Cipher (Numbers)", () => {
    expect(caesarCipher("Hello, World2!", 3)).toBe("Khoor, Zruog5!");
});

it("Caesar Cipher (Number Wrapping)", () => {
    expect(caesarCipher("Hello, World9!", 3)).toBe("Khoor, Zruog3!");
});

it("Caesar Cipher (Big Wrapping)", () => {
    expect(caesarCipher("Hello, World!", 673)).toBe("Ebiil, Tloia!");
});