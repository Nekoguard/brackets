module.exports = function check(str, bracketsConfig) {
  let brackets = [];

    // соберём пары открытых и закрытых скобок в массив
    for (let bracketsPair of bracketsConfig) {
        brackets.push(bracketsPair[0] + bracketsPair[1]);
    }

    for (let i = 0; i < brackets.length; i++) {
        if (str.includes(brackets[i]) ) {
            str = str.replace(brackets[i], ''); // убираем скобку из строки
            i = -1; // перееносимся на последний символ в строке, чтобы дальше проверить закрывающуюся скобку
        }
    }

    let result = str.length === 0 ? true : false;

    return result;
}
