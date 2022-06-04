function verify(s) {
    const Values = {
        ">": "<",
        "]": "[",
        ")": "(",
        "}": "{"
    }
    let stack = [];
    let isValid = true;
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt();
        let contains = Values.hasOwnProperty(char);
        if (!contains && Values[char] !== undefined) {
            stack.push(char);
        } else if (stack.length > 0) {
            let last = stack.pop();
            if (Values[char] !== last) {
                isValid = false;
                break;
            }
        } else if (stack.length === 0 && contains) {
            isValid = false;
            break;
        }
    }
    if (stack.length === 0 && isValid) return 1;
    return 0;
}