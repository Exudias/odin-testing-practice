function analyzeArray(arr)
{
    if (!arr) return null;

    let len = arr.length;

    if (len === 0) return {
        average: 0,
        min: 0,
        max: 0,
        length: 0
    };

    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i < len; i++)
    {
        let item = arr[i];

        if (typeof item !== "number") continue;

        sum += item;
        if (min > item)
        {
            min = item;
        }
        if (max < item)
        {
            max = item;
        }
    }

    return {
        average: sum / len,
        min,
        max,
        length: len
    }
}

module.exports = analyzeArray;