// Complete function padIt, which accepts 2 parameters:
//
//     str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
//     n: a number indicating how many times to pad the string.

function padIt(str,n){
    for(let i = 0; i < n; i++)
        if(i % 2 === 0){
            str = "*" + str
        }else{
            str = str + "*"
        }
    return str
}

padIt("hello", 1)

