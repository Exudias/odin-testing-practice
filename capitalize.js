function capitalize(input)
{
    if (input === "") return "";
    if (input === undefined) return null;

    let firstChar = input[0];
    firstChar = firstChar.toUpperCase();

    return firstChar + input.slice(1);
}

module.exports = capitalize;