function reverseString(input)
{
    if (input === undefined) return null;

    let out = "";
    for (let i = input.length - 1; i >= 0; i--)
    {
        out += input[i];
    }
    return out;
}

module.exports = reverseString;