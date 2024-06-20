const analyzeArray = require("./analyzeArray");

it("Analyze Array (Happy Path 1)", () => {
    const obj = analyzeArray([1,8,3,4,2,6]);

    expect(obj).toMatchObject(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    )
});

it("Analyze Array (Happy Path 2)", () => {
    const obj = analyzeArray([1,2,3]);

    expect(obj).toMatchObject(
        {
            average: 2,
            min: 1,
            max: 3,
            length: 3
        }
    )
});

it("Analyze Array (Bad item)", () => {
    const obj = analyzeArray([1,2,3, ""]);

    expect(obj).toMatchObject(
        {
            average: 1.5,
            min: 1,
            max: 3,
            length: 4
        }
    )
});

it("Analyze Array (Empty array)", () => {
    const obj = analyzeArray([]);

    expect(obj).toMatchObject(
        {
            average: 0,
            min: 0,
            max: 0,
            length: 0
        }
    )
});

it("Analyze Array (No input)", () => {
    const obj = analyzeArray();

    expect(obj).toBe(null);
});