let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

function leetTranslator(string) {
    var lowStr = string.toLowerCase()
    var leetCodex = {}
    var trStr = ''
    for(let i=0; i<letters.length; i++) {
        leetCodex[`${letters[i]}`] = `${leetChars[i]}`
    }
    for(let i=0; i<lowStr.length; i++) {
        trStr += leetCodex[`${lowStr[i]}`]
    }
    return trStr;
}

console.log(leetTranslator('Andrew'))