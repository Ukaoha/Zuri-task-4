
function convertFahrToCelsius(f) {
    let type = Array.isArray(f) ?
    'array' :
    typeof f

    if (isNaN(f) )
    return `"${f}" is not a valid number but a/an 
    ${type}`

    f = parseFloat(f)
    return `${((f - 32) * (5/9)).toFixed(4)} `

}



function checkYuGiOh(n) {
    if (isNaN(n) ) 
    return `invalid parameter: "${n}"`

    n = parseInt(n)

    let myarray = [...Array(n).keys()].map(i => ++i)
    for (let i = 0; i < myarray.length; i++) {
        const num = myarray[i]
        const yuGiOh = []
        
        if (num % 2 == 0)
        yuGiOh.push("yu")

        if (num % 3 == 0 )
        yuGiOh.push("gi")

        if (num % 5 == 0 )
        yuGiOh.push("Oh")

        myarray[i] = yuGiOh.length ?
        yuGiOh.join('-') :
        num
    }
     
    return myarray
}

// console.log(convertFahrToCelsius(0))
// console.log(checkYuGiOh(10))



















