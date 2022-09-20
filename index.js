let x = 'abcdef'

function doubleChar(str){
    return [...str].map(s => s.repeat(2)).join('')
        }

console.log(doubleChar(x));