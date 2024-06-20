class Calculator
{
    add(a, b)
    {
        if (typeof a !== "number" || typeof b !== "number") return null;

        return a + b;
    }

    subtract(a, b)
    {
        if (typeof a !== "number" || typeof b !== "number") return null;

        return a - b;
    }

    multiply(a, b)
    {
        if (typeof a !== "number" || typeof b !== "number") return null;

        return a * b;
    }

    divide(a, b)
    {
        if (typeof a !== "number" || typeof b !== "number") return null;
        if (b === 0) return NaN;

        return a / b;
    }
}

module.exports = Calculator;