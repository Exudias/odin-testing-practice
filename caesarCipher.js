function caesarCipher(input, amount)
{
    let out = "";

    for (let i = 0; i < input.length; i++)
    {
        let char = input[i];
        out += getCharacterAfterX(char, amount);
    }

    return out;
}

function getCharacterAfterX(char, after)
{
    let charCode = char.charCodeAt();
    let isNumber = (charCode > 47 && charCode < 58);
    let isUpperCaseLetter = (charCode > 64 && charCode < 91);
    let isLowerCaseLetter = (charCode > 96 && charCode < 123);

    if (isNumber) return (Number(char) + after) % 9;
    if (!isLowerCaseLetter && !isUpperCaseLetter) return char;

    let newCode = charCode + after;
    while (isUpperCaseLetter && newCode >= 91)
    {
        newCode -= 26;
    }
    while (isLowerCaseLetter && newCode >= 123)
    {
        newCode -= 26;
    }

    return String.fromCharCode(newCode);
}

module.exports = caesarCipher;